import Link from "next/link";
import MenuPageHeader from "@/components/MenuPageHeader";
import MenuList from "@/components/MenuList";
import menu from "@/public/data/menu.json";
import "@/styles/tandooriLove.css";

function TandooriLove() {
  const tandooriLoveMenu = menu["Tandoori Love"];

  return (
    <div className="TandooriLove-container">
      <div className="page-path-links">
        <p>
          <Link href="/menu">Menu</Link>
        </p>
        <hr />
        <p className="page-path-current-link">Tandoori Love</p>
      </div>

      <MenuPageHeader nameOfClass="TandooriLove-bg" menu="Tandoori Love" />
      <MenuList data={tandooriLoveMenu} />
    </div>
  );
}

export default TandooriLove;
