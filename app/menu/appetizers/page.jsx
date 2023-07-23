import MenuPageHeader from "@/components/MenuPageHeader";
import MenuList from "@/components/MenuList";
import AppetizersImage from "@/public/assets/images/Appetizers-bg.jpg";
import "@/styles/appetizers.css";

function Appetizers() {
  return (
    <div className="Appetizers-container">
      <div className="page-path-links">
        <p>Menu</p>
        <hr />
        <p className="page-path-current-link">Appetizers</p>
      </div>

      <MenuPageHeader nameOfClass="Appetizers-bg" menu="Appetizers" />
      <MenuList />
    </div>
  );
}

export default Appetizers;
