"use client";
import Link from "next/link";
import { EB_Garamond } from "next/font/google";
import _ from "lodash";
import cn from "classnames";
import MenuItem from "./MenuItem";
import chefSpecialImg1 from "@/public/assets/images/chef-special/img1.jpg";
import chefSpecialImg2 from "@/public/assets/images/chef-special/img2.jpg";
import chefSpecialImg3 from "@/public/assets/images/chef-special/img3.jpg";
import chefSpecialImg4 from "@/public/assets/images/chef-special/img4.jpg";
import chefSpecialImg5 from "@/public/assets/images/chef-special/img5.jpg";
import chefSpecialImg6 from "@/public/assets/images/chef-special/img6.jpg";
import menu from "@/public/data/menu.json";
import "@/styles/MenuSection.css";

const EB_Garamond_Font = EB_Garamond({
  subsets: ["latin"],
  weight: "400",
});

function MenuSection() {
  const menuObjKeys = Object.keys(menu);

  const chefSpecialMenu = [];
  menuObjKeys.forEach((menuItemKey) => {
    const menuItemKeyRecordsObj = menu[menuItemKey];
    const menuItemKeySubRecordsKeys = Object.keys(menuItemKeyRecordsObj);

    menuItemKeySubRecordsKeys.forEach((menuItemKeySubRecordsKey) => {
      const records = menuItemKeyRecordsObj[menuItemKeySubRecordsKey];

      const menu = records.forEach((record) => {
        if (record.chefSpecial) {
          chefSpecialMenu.push(record);
        }
      });
    });
  });

  return (
    <section className="MenuSection-container">
      <p className={cn(EB_Garamond_Font.className, "MenuSection-heading")}>
        Menu
      </p>

      <div className="MenuSection-items-wrapper">
        {chefSpecialMenu.map((menuItem) => {
          let img;
          switch (menuItem.id) {
            case 59:
              img = chefSpecialImg1;
              break;
            case 60:
              img = chefSpecialImg2;
              break;
            case 61:
              img = chefSpecialImg3;
              break;
            case 62:
              img = chefSpecialImg4;
              break;
            case 63:
              img = chefSpecialImg5;
              break;
            case 64:
              img = chefSpecialImg6;
              break;

            default:
              img = chefSpecialImg1;
              break;
          }

          return (
            <MenuItem
              image={img}
              alt={menuItem.name}
              name={menuItem.name}
              price={menuItem.price}
              desc={menuItem.desc}
              key={menuItem.id}
            />
          );
        })}
      </div>

      <div className="MenuSection-see-menu-btn-wrapper">
        <Link href="/menu">
          <button>SEE MENU</button>
        </Link>
      </div>
    </section>
  );
}

export default MenuSection;
