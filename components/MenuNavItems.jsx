import Link from "next/link";
import menuItems from "@/public/data/menuItems.json";

function MenuNavItems() {
  return (
    <>
      {menuItems.map(({ id, path, name }) => (
        <Link href={`/menu/${path}`} key={id}>
          {name}
        </Link>
      ))}
    </>
  );
}

export default MenuNavItems;
