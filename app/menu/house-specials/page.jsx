import Link from "next/link";
import MenuPageHeader from "@/components/MenuPageHeader";
import MenuList from "@/components/MenuList";
import menu from "@/public/data/menu.json";
import "@/styles/houseSpecials.css";

function HouseSpecials() {
  const houseSpecialsMenu = menu["House Special's"];

  return (
    <div className="HouseSpecials-container">
      <div className="page-path-links">
        <p>
          <Link href="/menu">Menu</Link>
        </p>
        <hr />
        <p className="page-path-current-link">House Special's</p>
      </div>

      <MenuPageHeader nameOfClass="HouseSpecials-bg" menu="House Special's" />
      <MenuList data={houseSpecialsMenu} />
    </div>
  );
}

export default HouseSpecials;
