import Link from "next/link";
import MenuPageHeader from "@/components/MenuPageHeader";
import MenuList from "@/components/MenuList";
import menu from "@/public/data/menu.json";
import "@/styles/kidElicious.css";

function KidElicious() {
  const kidEliciousMenu = menu["KiD'elicious"];

  return (
    <div className="KidElicious-container">
      <div className="page-path-links">
        <p>
          <Link href="/menu">Menu</Link>
        </p>
        <hr />
        <p className="page-path-current-link">KiD'elicious</p>
      </div>

      <MenuPageHeader nameOfClass="KidElicious-bg" menu="KiD'elicious" />
      <MenuList data={kidEliciousMenu} />
    </div>
  );
}

export default KidElicious;
