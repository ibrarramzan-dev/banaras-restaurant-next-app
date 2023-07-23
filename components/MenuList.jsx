import MenuListItem from "./MenuListItem";
import appetizers from "@/public/data/appetizers.json";
import "@/styles/MenuList.css";

function MenuList() {
  return (
    <div className="MenuList-container">
      <div className="MenuList-vertical-line-wrapper" />

      <div className="MenuList-wrapper">
        {appetizers.map((appetizer) => (
          <MenuListItem data={appetizer} />
        ))}
      </div>
    </div>
  );
}

export default MenuList;
