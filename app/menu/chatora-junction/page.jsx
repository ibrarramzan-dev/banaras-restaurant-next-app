import MenuList from "@/components/MenuList";
import menu from "@/public/data/menu.json";

function ChatoraJunction() {
  const chatoraJunctionMenu = menu["Chatora Junction"];

  return (
    <div className="ChatoraJunction-container">
      <MenuList data={chatoraJunctionMenu} />
    </div>
  );
}

export default ChatoraJunction;
