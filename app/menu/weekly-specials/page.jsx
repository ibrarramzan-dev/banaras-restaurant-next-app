import Link from "next/link";
import MenuPageHeader from "@/components/MenuPageHeader";
import MenuList from "@/components/MenuList";
import menu from "@/public/data/menu.json";
import "@/styles/weeklySpecials.css";

function WeeklySpecials() {
  const weeklySpecialsMenu = menu["Weekly Special's"];

  return (
    <div className="WeeklySpecials-container">
      <div className="page-path-links">
        <p>
          <Link href="/menu">Menu</Link>
        </p>
        <hr />
        <p className="page-path-current-link">Weekly Special's</p>
      </div>

      <MenuPageHeader nameOfClass="WeeklySpecials-bg" menu="Weekly Special's" />
      <MenuList data={weeklySpecialsMenu} />
    </div>
  );
}

export default WeeklySpecials;
