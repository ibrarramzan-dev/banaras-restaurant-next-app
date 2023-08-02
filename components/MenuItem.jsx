import Image from "next/image";
import { EB_Garamond } from "next/font/google";
import MenuItemInfo from "./MenuItemInfo";
import "@/styles/MenuItem.css";

const EB_Garamond_Font = EB_Garamond({
  subsets: ["latin"],
  weight: "400",
});

function MenuItem({ image, alt, name, price, desc }) {
  return (
    <div className="MenuItem-container">
      <Image src={image} alt={alt} />

      <MenuItemInfo name={name} price={price} desc={desc} />

      <div className="MenuItem-chef-special-wrapper">
        <p className={EB_Garamond_Font.className}>Chef's Special</p>
      </div>
    </div>
  );
}

export default MenuItem;
