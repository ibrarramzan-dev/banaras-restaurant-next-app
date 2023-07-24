import MenuPageHeader from "@/components/MenuPageHeader";
import MenuList from "@/components/MenuList";
import "@/styles/foods.css";

function Foods() {
  return (
    <div className="Foods-container">
      <div className="page-path-links">
        <p>Menu</p>
        <hr />
        <p className="page-path-current-link">Foods</p>
      </div>

      <MenuPageHeader nameOfClass="Foods-bg" menu="Foods" />
      <MenuList />
    </div>
  );
}

export default Foods;
