import "@/styles/MenuListItem.css";
import MenuItemInfo from "./MenuItemInfo";

function MenuListItem({ data }) {
  const { name, variants, price, desc, weight } = data;

  return (
    <div className="MenuListItem-container">
      <MenuItemInfo name={name} variants={variants} price={price} desc={desc} />
    </div>
  );
}

export default MenuListItem;
