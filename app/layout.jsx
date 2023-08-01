"use client";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Banaras xpress",
  description: "Best restaurant in town",
};

export default function RootLayout({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <html lang="en">
      <body>
        <main>
          <Header />
          <div
            ref={ref}
            style={{
              position: "relative",
              width: "100%",
              overflow: "hidden",
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 1, delay: 0.1 }}
            >
              {children}
            </motion.div>
            {/* <motion.div
              variants={{
                hidden: { left: 0 },
                visible: { left: "100%" },
              }}
              initial="hidden"
              animate={slideControls}
              transition={{ duration: 5, ease: "easeIn" }}
\            >
              {children}
            </motion.div> */}
          </div>{" "}
          <Footer />
        </main>
      </body>
    </html>
  );
}
