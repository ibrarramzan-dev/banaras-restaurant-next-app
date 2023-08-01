import Link from "next/link";
import MenuPageHeader from "@/components/MenuPageHeader";
import MenuList from "@/components/MenuList";
import menu from "@/public/data/menu.json";
import "@/styles/food.css";

function Food() {
  const foodMenuData = menu["Food"];

  return (
    <div className="Food-container">
      <div className="page-path-links">
        <p>
          <Link href="/menu">Menu</Link>
        </p>
        <hr />
        <p className="page-path-current-link">Food</p>
      </div>

      <MenuPageHeader nameOfClass="Food-bg" menu="Food" />
      <MenuList data={foodMenuData} />
    </div>
  );
}

export default Food;
