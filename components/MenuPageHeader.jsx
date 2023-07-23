import Image from "next/image";
import { EB_Garamond } from "next/font/google";
import cn from "classnames";
import "@/styles/MenuPageHeader.css";

const EB_Garamond_Font = EB_Garamond({
  subsets: ["latin"],
  weight: "400",
});

function MenuPageHeader({ nameOfClass, menu }) {
  return (
    <div
      className={cn(
        "MenuPageHeader-container",
        nameOfClass,
        EB_Garamond_Font.className
      )}
    >
      <p className="MenuPageHeader-menu-text">{menu}</p>
    </div>
  );
}

export default MenuPageHeader;
