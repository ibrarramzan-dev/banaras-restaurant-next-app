import Link from "next/link";
import MenuPageHeader from "@/components/MenuPageHeader";
import MenuList from "@/components/MenuList";
import menu from "@/public/data/menu.json";
import "@/styles/indoChinese.css";

function IndoChinese() {
  const indoChineseMenu = menu["Indo-Chinese"];

  return (
    <div className="IndoChinese-container">
      <div className="page-path-links">
        <p>
          <Link href="/menu">Menu</Link>
        </p>
        <hr />
        <p className="page-path-current-link">Indo-Chinese</p>
      </div>

      <MenuPageHeader nameOfClass="IndoChinese-bg" menu="Indo-Chinese" />
      <MenuList data={indoChineseMenu} />
    </div>
  );
}

export default IndoChinese;
