import MenuList from "@/components/MenuList";
import menu from "@/public/data/menu.json";
import "@/styles/IndoChinese.css";

function IndoChinese() {
  const indoChineseMenu = menu["Indo-Chinese"];

  return (
    <div className="IndoChinese-container">
      <MenuList data={indoChineseMenu} />
    </div>
  );
}

export default IndoChinese;
