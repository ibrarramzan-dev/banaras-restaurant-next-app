import Image from "next/image";
import { EB_Garamond } from "next/font/google";
import cn from "classnames";
import Dash from "@/public/assets/images/dash.png";
import "@/styles/StandardBox.css";

const EB_Garamond_Font = EB_Garamond({
  subsets: ["latin"],
  weight: "400",
});

function StandardBox({ heading, content }) {
  return (
    <div className="StandardBox-container">
      <div>
        <Image src={Dash} alt="Dash" />
      </div>
      <p className={cn(EB_Garamond_Font.className, "StandardBox-heading")}>
        {heading}
      </p>
      <p className="StandardBox-text">{content}</p>
    </div>
  );
}

export default StandardBox;
