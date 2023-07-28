import MenuList from "@/components/MenuList";
import menu from "@/public/data/menu.json";
import "@/styles/TandooriLove.css";

function TandooriLove() {
  const tandooriLoveMenu = menu["Tandoori Love"];

  return (
    <div className="TandooriLove-container">
      <MenuList data={tandooriLoveMenu} />
    </div>
  );
}

export default TandooriLove;
