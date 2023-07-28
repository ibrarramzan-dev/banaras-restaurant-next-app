import MenuList from "@/components/MenuList";
import menu from "@/public/data/menu.json";
import "@/styles/Biryani.css";

function Biryani() {
  const biryaniMenu = menu["Biryani"];

  return (
    <div className="Biryani-container">
      <MenuList data={biryaniMenu} />
    </div>
  );
}

export default Biryani;
