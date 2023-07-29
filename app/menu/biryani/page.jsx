import Link from "next/link";
import MenuPageHeader from "@/components/MenuPageHeader";
import MenuList from "@/components/MenuList";
import menu from "@/public/data/menu.json";
import "@/styles/biryani.css";

function Biryani() {
  const biryaniMenu = menu["Biryani"];

  return (
    <div className="Biryani-container">
      <div className="page-path-links">
        <p>
          <Link href="/menu">Menu</Link>
        </p>
        <hr />
        <p className="page-path-current-link">Biryani</p>
      </div>

      <MenuPageHeader nameOfClass="Biryani-bg" menu="Biryani" />
      <MenuList data={biryaniMenu} />
    </div>
  );
}

export default Biryani;
