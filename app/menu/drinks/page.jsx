import Link from "next/link";
import MenuPageHeader from "@/components/MenuPageHeader";
import MenuList from "@/components/MenuList";
import menu from "@/public/data/menu.json";
import "@/styles/drinks.css";

function Drinks() {
  const drinksMenuData = menu["Drinks"];

  return (
    <div className="Drinks-container">
      <div className="page-path-links">
        <p>
          <Link href="/menu">Menu</Link>
        </p>
        <hr />
        <p className="page-path-current-link">Drinks</p>
      </div>

      <MenuPageHeader nameOfClass="Drinks-bg" menu="Drinks" />
      <MenuList data={drinksMenuData} />
    </div>
  );
}

export default Drinks;
