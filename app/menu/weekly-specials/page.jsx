import MenuList from "@/components/MenuList";
import menu from "@/public/data/menu.json";
import "@/styles/WeeklySpecials.css";

function WeeklySpecials() {
  const weeklySpecialsMenu = menu["Weekly Special's"];

  return (
    <div className="WeeklySpecials-container">
      <MenuList data={weeklySpecialsMenu} />
    </div>
  );
}

export default WeeklySpecials;
