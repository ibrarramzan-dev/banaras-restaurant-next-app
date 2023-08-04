"use client";
import { useState } from "react";
import Image from "next/image";
import { EB_Garamond } from "next/font/google";
import cn from "classnames";
import Dash from "@/public/assets/images/dash.png";
import menu from "@/public/data/menu.json";
import menuItems from "@/public/data/menuItems.json";
import MenuPageHeader from "@/components/MenuPageHeader";
import MenuList from "@/components/MenuList";
import "@/styles/menu.css";

const EB_Garamond_Font = EB_Garamond({
  subsets: ["latin"],
  weight: "400",
});

function Menu() {
  const [currentMenu, setCurrentMenu] = useState("Food");

  const onPillClick = (name) => {
    setCurrentMenu(name);
  };

  const currentMenuStr = currentMenu
    .replace(" ", "")
    .replace("'", "")
    .replace("-", "")
    .replace("KiDe", "KidE");

  return (
    <div className={cn(EB_Garamond_Font.className, "Menu-container")}>
      <div className="Menu-heading-wrapper">
        <p className="page-heading">Menu</p>
        <div>
          <Image src={Dash} alt="Dash" />
        </div>
      </div>

      <div className="Menu-nav-items-pills-container">
        {menuItems.map(({ id, name }) => {
          if (name !== "Full Menu") {
            return (
              <div
                className={cn({
                  "Menu-nav-items-pill": true,
                  "Menu-nav-items-active-pill": name === currentMenu,
                })}
                onClick={() => onPillClick(name)}
              >
                {name}
              </div>
            );
          }
        })}
      </div>

      <br />
      <hr />

      <MenuPageHeader nameOfClass={`${currentMenuStr}-bg`} menu={currentMenu} />
      <div className={`Menu-${currentMenuStr}-wrapper`}>
        <MenuList data={menu[currentMenu]} />
      </div>
    </div>
  );
}

export default Menu;
