import MenuList from "@/components/MenuList";
import menu from "@/public/data/menu.json";
import "@/styles/IndianFusion.css";

function IndianFusion() {
  const indianFusionMenu = menu["Indian Fusion"];

  return (
    <div className="IndianFusion-container">
      <MenuList data={indianFusionMenu} />
    </div>
  );
}

export default IndianFusion;
