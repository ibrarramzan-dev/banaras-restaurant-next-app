import { EB_Garamond } from "next/font/google";
import cn from "classnames";
import "@/styles/Section.css";

const EB_Garamond_Font = EB_Garamond({
  subsets: ["latin"],
  weight: "400",
});

function Section() {
  return (
    <section className="Section-container">
      <div
        className={cn(
          EB_Garamond_Font.className,
          "Section-item-wrapper Section-item-wrapper-1"
        )}
      >
        <p className="Section-item-heading">Kitchen</p>
        <p className="Section-item-desc">
          Our modern kitchen is the heart of Avenue.
        </p>
      </div>

      <div
        className={cn(
          EB_Garamond_Font.className,
          "Section-item-wrapper Section-item-wrapper-2"
        )}
      >
        <p className="Section-item-heading">Interior</p>
        <p className="Section-item-desc">
          Do you value relaxing, friendly atmosphere?
        </p>
      </div>

      <div
        className={cn(
          EB_Garamond_Font.className,
          "Section-item-wrapper Section-item-wrapper-3"
        )}
      >
        <p className="Section-item-heading">Exterior</p>
        <p className="Section-item-desc">
          We have very attractive and comfortable exterior.
        </p>
      </div>
    </section>
  );
}

export default Section;
