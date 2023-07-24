import { EB_Garamond } from "next/font/google";
import cn from "classnames";
import "@/styles/MenuItemInfo.css";

const EB_Garamond_Font = EB_Garamond({
  subsets: ["latin"],
  weight: "400",
});

function MenuItemInfo({ name, variants, price, desc }) {
  return (
    <div className="MenuItemInfo-container">
      <div
        className={cn(
          EB_Garamond_Font.className,
          "MenuItemInfo-text-wrapper",
          "MenuItemInfo-text-wrapper-1"
        )}
      >
        <div>
          <p>{name}</p>
          <p className="MenuItemInfo-text-variants">{variants}</p>
        </div>
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
      </div>
    </div>
  );
}

export default MenuItemInfo;
