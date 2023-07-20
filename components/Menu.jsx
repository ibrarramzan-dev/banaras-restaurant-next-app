import { EB_Garamond } from "next/font/google";
import cn from "classnames";
import MenuItem from "./MenuItem";
import MenuImg1 from "@/public/assets/images/Menu-img-1.jpg";
import MenuImg2 from "@/public/assets/images/Menu-img-2.jpg";
import MenuImg3 from "@/public/assets/images/Menu-img-3.jpg";
import MenuImg4 from "@/public/assets/images/Menu-img-4.jpg";
import MenuImg5 from "@/public/assets/images/Menu-img-5.jpg";
import MenuImg6 from "@/public/assets/images/Menu-img-6.jpg";
import "@/styles/Menu.css";

const EB_Garamond_Font = EB_Garamond({
  subsets: ["latin"],
  weight: "400",
});

function Menu() {
  return (
    <section className="Menu-container">
      <p className={cn(EB_Garamond_Font.className, "Menu-heading")}>Menu</p>

      <div className="Menu-items-wrapper">
        <MenuItem
          image={MenuImg1}
          alt="Thyme Soup with Cream"
          name="Thyme Soup with Cream"
          price="5.45"
          desc="with Winter black truffles from Piedmont"
          weight="320"
        />
        <MenuItem
          image={MenuImg2}
          alt="Hot Grilled Chicken Breast"
          name="Hot Grilled Chicken Breast"
          price="2.45"
          desc="with pecan ‘épicé’ & passe crassane pear"
          weight="320"
        />
        <MenuItem
          image={MenuImg3}
          alt="Big Smokey Burger"
          name="Big Smokey Burger"
          price="8.45"
          desc="with ground beef sirloin and adobo sauce"
          weight="320"
        />
        <MenuItem
          image={MenuImg4}
          alt="Blue Cheese Burger"
          name="Blue Cheese Burger"
          price="5.45"
          desc="with sun-dried tomatoes and lean ground beef"
          weight="320"
        />
        <MenuItem
          image={MenuImg5}
          alt="Catriona potato gnocchi"
          name="Catriona potato gnocchi"
          price="8.71"
          desc="with black truffles"
          weight="320"
        />
        <MenuItem
          image={MenuImg6}
          alt="Fruit Pie"
          name="Fruit Pie"
          price="6.45"
          desc="with raisins, chopped pecans, and coconut"
          weight="320"
        />
      </div>

      <div className="Menu-see-menu-btn-wrapper">
        <button>SEE MENU</button>
      </div>
    </section>
  );
}

export default Menu;
