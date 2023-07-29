import Link from "next/link";
import MenuPageHeader from "@/components/MenuPageHeader";
import MenuList from "@/components/MenuList";
import menu from "@/public/data/menu.json";
import "@/styles/dessertSpecials.css";

function DessertSpecials() {
  const dessertSpecialsMenu = menu["Dessert Special's"];

  return (
    <div className="DessertSpecials-container">
      <div className="page-path-links">
        <p>
          <Link href="/menu">Menu</Link>
        </p>
        <hr />
        <p className="page-path-current-link">Dessert Special's</p>
      </div>

      <MenuPageHeader
        nameOfClass="DessertSpecials-bg"
        menu="Dessert Special's"
      />
      <MenuList data={dessertSpecialsMenu} />
    </div>
  );
}

export default DessertSpecials;
