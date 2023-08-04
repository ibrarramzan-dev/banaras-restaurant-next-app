import MenuNavItems from "./MenuNavItems";
import "@/styles/MenuDropdown.css";

function MenuDropdown({ arrow }) {
  return (
    <div className="nav-dropdown">
      <span className="nav-dropdown-btn" style={{ fontWeight: "bold" }}>
        MENU{" "}
        <span style={{ fontSize: "0.72rem", height: "0.1rem" }}>{arrow}</span>
      </span>

      <div className="nav-dropdown-content">
        <MenuNavItems />
      </div>
    </div>
  );
}

export default MenuDropdown;
