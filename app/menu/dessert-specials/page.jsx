import MenuList from "@/components/MenuList";
import menu from "@/public/data/menu.json";
import "@/styles/DessertSpecials.css";

function DessertSpecials() {
  const dessertSpecialsMenu = menu["Dessert Special's"];

  return (
    <div className="DessertSpecials-container">
      <MenuList data={dessertSpecialsMenu} />
    </div>
  );
}

export default DessertSpecials;
