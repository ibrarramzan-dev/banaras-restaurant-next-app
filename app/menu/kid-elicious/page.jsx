import MenuList from "@/components/MenuList";
import menu from "@/public/data/menu.json";
import "@/styles/KidElicious.css";

function KidElicious() {
  const kidEliciousMenu = menu["KiD'elicious"];

  return (
    <div className="KidElicious-container">
      <MenuList data={kidEliciousMenu} />
    </div>
  );
}

export default KidElicious;
