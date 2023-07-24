import { EB_Garamond } from "next/font/google";
import cn from "classnames";
import MenuListItem from "./MenuListItem";
import "@/styles/MenuList.css";

const EB_Garamond_Font = EB_Garamond({
  subsets: ["latin"],
  weight: "400",
});

function MenuList({ data }) {
  const menuKeys = Object.keys(data);

  const renderMenu = () => {
    const menuJSX = [];
    menuKeys.forEach((menuKey) => {
      if (menuKey !== "") {
        menuJSX.push(
          <p className={cn(EB_Garamond_Font.className, "MenuList-heading")}>
            {menuKey}
          </p>
        );
      }
      menuJSX.push(
        <div className="MenuList-wrapper">
          {data[menuKey].map((menu) => (
            <MenuListItem data={menu} />
          ))}
        </div>
      );
    });

    return menuJSX;
  };

  return (
    <div className="MenuList-container">
      <div className="MenuList-vertical-line-wrapper" />

      {renderMenu()}
    </div>
  );
}

export default MenuList;
