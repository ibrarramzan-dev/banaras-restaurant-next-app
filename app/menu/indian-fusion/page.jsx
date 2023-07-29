import Link from "next/link";
import MenuPageHeader from "@/components/MenuPageHeader";
import MenuList from "@/components/MenuList";
import menu from "@/public/data/menu.json";
import "@/styles/indianFusion.css";

function IndianFusion() {
  const indianFusionMenu = menu["Indian Fusion"];

  return (
    <div className="IndianFusion-container">
      <div className="page-path-links">
        <p>
          <Link href="/menu">Menu</Link>
        </p>
        <hr />
        <p className="page-path-current-link">Indian Fusion</p>
      </div>

      <MenuPageHeader nameOfClass="IndianFusion-bg" menu="Indian Fusion" />
      <MenuList data={indianFusionMenu} />
    </div>
  );
}

export default IndianFusion;
