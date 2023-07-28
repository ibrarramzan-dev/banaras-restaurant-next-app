import MenuList from "@/components/MenuList";
import menu from "@/public/data/menu.json";
import "@/styles/HouseSpecials.css";

function HouseSpecials() {
  const houseSpecialsMenu = menu["House Special's"];

  return (
    <div className="HouseSpecials-container">
      <MenuList data={houseSpecialsMenu} />
    </div>
  );
}

export default HouseSpecials;
