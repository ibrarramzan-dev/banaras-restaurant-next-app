import MenuPageHeader from "@/components/MenuPageHeader";
import MenuList from "@/components/MenuList";
import appetizersData from "@/public/data/appetizers.json";
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
      <MenuList data={appetizersData} />
    </div>
  );
}

export default Appetizers;
