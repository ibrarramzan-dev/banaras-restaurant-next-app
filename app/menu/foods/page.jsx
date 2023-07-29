import Link from "next/link";
import MenuPageHeader from "@/components/MenuPageHeader";
import MenuList from "@/components/MenuList";
import menu from "@/public/data/menu.json";
import "@/styles/foods.css";

function Foods() {
  const foodsMenuData = menu["Foods"];

  return (
    <div className="Foods-container">
      <div className="page-path-links">
        <p>
          <Link href="/menu">Menu</Link>
        </p>
        <hr />
        <p className="page-path-current-link">Foods</p>
      </div>

      <MenuPageHeader nameOfClass="Foods-bg" menu="Foods" />
      <MenuList data={foodsMenuData} />
    </div>
  );
}

export default Foods;
