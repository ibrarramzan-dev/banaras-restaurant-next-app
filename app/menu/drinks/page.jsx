import MenuPageHeader from "@/components/MenuPageHeader";
import MenuList from "@/components/MenuList";
import "@/styles/drinks.css";

function Drinks() {
  return (
    <div className="Drinks-container">
      <div className="page-path-links">
        <p>Menu</p>
        <hr />
        <p className="page-path-current-link">Drinks</p>
      </div>

      <MenuPageHeader nameOfClass="Drinks-bg" menu="Drinks" />
      <MenuList />
    </div>
  );
}

export default Drinks;
