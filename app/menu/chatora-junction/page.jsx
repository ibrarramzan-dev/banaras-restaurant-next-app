import Link from "next/link";
import MenuPageHeader from "@/components/MenuPageHeader";
import MenuList from "@/components/MenuList";
import menu from "@/public/data/menu.json";

function ChatoraJunction() {
  const chatoraJunctionMenu = menu["Chatora Junction"];

  return (
    <div className="ChatoraJunction-container">
      <div className="page-path-links">
        <p>
          <Link href="/menu">Menu</Link>
        </p>
        <hr />
        <p className="page-path-current-link">Chatora Junction</p>
      </div>

      <MenuPageHeader
        nameOfClass="ChatoraJunction-bg"
        menu="Chatora Junction"
      />
      <MenuList data={chatoraJunctionMenu} />
    </div>
  );
}

export default ChatoraJunction;
