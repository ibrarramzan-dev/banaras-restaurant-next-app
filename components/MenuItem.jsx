import Image from "next/image";
import { EB_Garamond } from "next/font/google";
import cn from "classnames";
import "@/styles/MenuItem.css";

const EB_Garamond_Font = EB_Garamond({
  subsets: ["latin"],
  weight: "400",
});

function MenuItem({ image, alt, name, price, desc, weight }) {
  return (
    <div className="MenuItem-container">
      <Image src={image} alt={alt} />
      <div
        className={cn(
          EB_Garamond_Font.className,
          "MenuItem-text-wrapper",
          "MenuItem-text-wrapper-1"
        )}
      >
        <p>{name}</p>
        <p>${price}</p>
      </div>

      <div
        className={cn(
          EB_Garamond_Font.className,
          "MenuItem-text-wrapper",
          "MenuItem-text-wrapper-2"
        )}
      >
        <p>{desc}</p>
        <p>{weight}g</p>
      </div>

      <div className="MenuItem-chef-special-wrapper">
        <p className={EB_Garamond_Font.className}>Chef's Special</p>
      </div>
    </div>
  );
}

export default MenuItem;
