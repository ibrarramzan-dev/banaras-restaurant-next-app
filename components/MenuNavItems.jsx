import Link from "next/link";
import menuItems from "@/public/data/menuItems.json";

function MenuNavItems({ onMenuItemClick }) {
  return (
    <>
      {menuItems.map(({ id, path, name }) => (
        <Link href={`/menu/${path}`} key={id} onClick={onMenuItemClick}>
          {name}
        </Link>
      ))}
    </>
  );
}

export default MenuNavItems;
