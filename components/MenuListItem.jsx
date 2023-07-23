import "@/styles/MenuListItem.css";
import MenuItemInfo from "./MenuItemInfo";

function MenuListItem({ data }) {
  const { name, price, desc, weight } = data;

  return (
    <div className="MenuListItem-container">
      <MenuItemInfo name={name} price={price} desc={desc} weight={weight} />
    </div>
  );
}

export default MenuListItem;
