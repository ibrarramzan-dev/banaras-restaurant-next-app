import Image from "next/image";
import { EB_Garamond } from "next/font/google";
import cn from "classnames";
import Dash from "@/public/assets/images/dash.png";
import "@/styles/menu.css";

const EB_Garamond_Font = EB_Garamond({
  subsets: ["latin"],
  weight: "400",
});

function Menu() {
  return (
    <div className={cn(EB_Garamond_Font.className, "Menu-container")}>
      <p className="page-heading">Menu</p>
      <div>
        <Image src={Dash} alt="Dash" />
      </div>
    </div>
  );
}

export default Menu;
