import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Banaras Xpress",
  description: "Best restaurant in town",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head>
        <Link rel="icon" href="/assets/images/banaras-logo-favicon.ico" />
      </Head> */}
      <head>
        <link rel="icon" href="/assets/images/banaras-logo-favicon.ico" />
      </head>{" "}
      <body>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
