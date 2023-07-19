import { EB_Garamond } from "next/font/google";
import cn from "classnames";
import "@/styles/Founded.css";

const EB_Garamond_Font = EB_Garamond({
  subsets: ["latin"],
  weight: "400",
});

function Founded() {
  return (
    <section className="Founded-container">
      <p className={cn(EB_Garamond_Font.className, "Founded-heading")}>
        Founded in 2023
      </p>
      <div className="Founded-text-wrapper">
        <p className={cn(EB_Garamond_Font.className, "Founded-text")}>
          Banaras is very proud to set to serve fine Indian dishes for many
          years to come!
        </p>
      </div>
    </section>
  );
}

export default Founded;
