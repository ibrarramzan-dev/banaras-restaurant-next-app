import Link from "next/link";
import MenuPageHeader from "@/components/MenuPageHeader";
import MenuList from "@/components/MenuList";
import menu from "@/public/data/menu.json";
import "@/styles/appetizers.css";

function Appetizers() {
  const appetizersMenuData = menu["Appetizers"];

  return (
    <div className="Appetizers-container">
      <div className="page-path-links">
        <p>
          <Link href="/menu">Menu</Link>
        </p>
        <hr />
        <p className="page-path-current-link">Appetizers</p>
      </div>

      <MenuPageHeader nameOfClass="Appetizers-bg" menu="Appetizers" />
      <MenuList data={appetizersMenuData} />
    </div>
  );
}

export default Appetizers;
