import { EB_Garamond } from "next/font/google";
import cn from "classnames";
import MenuItem from "./MenuItem";
import MenuSectionImg1 from "@/public/assets/images/MenuSection-img-1.jpg";
import MenuSectionImg2 from "@/public/assets/images/MenuSection-img-2.jpg";
import MenuSectionImg3 from "@/public/assets/images/MenuSection-img-3.jpg";
import MenuSectionImg4 from "@/public/assets/images/MenuSection-img-4.jpg";
import MenuSectionImg5 from "@/public/assets/images/MenuSection-img-5.jpg";
import MenuSectionImg6 from "@/public/assets/images/MenuSection-img-6.jpg";
import "@/styles/MenuSection.css";

const EB_Garamond_Font = EB_Garamond({
  subsets: ["latin"],
  weight: "400",
});

function MenuSection() {
  return (
    <section className="MenuSection-container">
      <p className={cn(EB_Garamond_Font.className, "MenuSection-heading")}>
        Menu
      </p>

      <div className="MenuSection-items-wrapper">
        <MenuItem
          image={MenuSectionImg1}
          alt="Thyme Soup with Cream"
          name="Thyme Soup with Cream"
          price="5.45"
          desc="with Winter black truffles from Piedmont"
          weight="320"
        />
        <MenuItem
          image={MenuSectionImg2}
          alt="Hot Grilled Chicken Breast"
          name="Hot Grilled Chicken Breast"
          price="2.45"
          desc="with pecan ‘épicé’ & passe crassane pear"
          weight="320"
        />
        <MenuItem
          image={MenuSectionImg3}
          alt="Big Smokey Burger"
          name="Big Smokey Burger"
          price="8.45"
          desc="with ground beef sirloin and adobo sauce"
          weight="320"
        />
        <MenuItem
          image={MenuSectionImg4}
          alt="Blue Cheese Burger"
          name="Blue Cheese Burger"
          price="5.45"
          desc="with sun-dried tomatoes and lean ground beef"
          weight="320"
        />
        <MenuItem
          image={MenuSectionImg5}
          alt="Catriona potato gnocchi"
          name="Catriona potato gnocchi"
          price="8.71"
          desc="with black truffles"
          weight="320"
        />
        <MenuItem
          image={MenuSectionImg6}
          alt="Fruit Pie"
          name="Fruit Pie"
          price="6.45"
          desc="with raisins, chopped pecans, and coconut"
          weight="320"
        />
      </div>

      <div className="MenuSection-see-menu-btn-wrapper">
        <button>SEE MENU</button>
      </div>
    </section>
  );
}

export default MenuSection;
