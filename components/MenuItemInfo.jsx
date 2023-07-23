import { EB_Garamond } from "next/font/google";
import cn from "classnames";
import "@/styles/MenuItemInfo.css";

const EB_Garamond_Font = EB_Garamond({
  subsets: ["latin"],
  weight: "400",
});

function MenuItemInfo({ name, price, desc, weight }) {
  return (
    <div className="MenuItemInfo-container">
      <div
        className={cn(
          EB_Garamond_Font.className,
          "MenuItemInfo-text-wrapper",
          "MenuItemInfo-text-wrapper-1"
        )}
      >
        <p>{name}</p>
        <p>${price}</p>
      </div>

      <div
        className={cn(
          EB_Garamond_Font.className,
          "MenuItemInfo-text-wrapper",
          "MenuItemInfo-text-wrapper-2"
        )}
      >
        <p>{desc}</p>
        <p>{weight}g</p>
      </div>
    </div>
  );
}

export default MenuItemInfo;
