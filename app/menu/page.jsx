"use client";
import Image from "next/image";
import { EB_Garamond } from "next/font/google";
import cn from "classnames";
import Dash from "@/public/assets/images/dash.png";
import menuItems from "@/public/data/menuItems.json";
import "@/styles/menu.css";

const EB_Garamond_Font = EB_Garamond({
  subsets: ["latin"],
  weight: "400",
});

function Menu() {
  const onPillClick = (name) => {
    alert(name);
  };

  return (
    <div className={cn(EB_Garamond_Font.className, "Menu-container")}>
      <div className="Menu-heading-wrapper">
        <p className="page-heading">Menu</p>
        <div>
          <Image src={Dash} alt="Dash" />
        </div>
      </div>

      <div className="Menu-nav-items-pills-container">
        {menuItems.map(({ id, name }) => (
          <div
            className="Menu-nav-items-pill"
            onClick={() => onPillClick(name)}
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
