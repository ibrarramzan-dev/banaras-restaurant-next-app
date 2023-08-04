"use client";
import { useRef } from "react";
import MenuNavItems from "./MenuNavItems";
import "@/styles/MenuDropdown.css";

function MenuDropdown({ arrow }) {
  const dropdownContentRef = useRef(null);

  const onMenuItemClick = () => {
    if (dropdownContentRef.current) {
      dropdownContentRef.current.style.display = "none";
    }
  };

  const onMenuHover = () => {
    if (dropdownContentRef.current) {
      dropdownContentRef.current.style.display = "block";
    }
  };

  const onMenuHoverOut = () => {
    if (dropdownContentRef.current) {
      dropdownContentRef.current.style.display = "none";
    }
  };

  return (
    <div
      className="nav-dropdown"
      onMouseEnter={onMenuHover}
      onMouseLeave={onMenuHoverOut}
    >
      <span className="nav-dropdown-btn" style={{ fontWeight: "bold" }}>
        MENU{" "}
        <span style={{ fontSize: "0.72rem", height: "0.1rem" }}>{arrow}</span>
      </span>

      <div className="nav-dropdown-content" ref={dropdownContentRef}>
        <MenuNavItems onMenuItemClick={onMenuItemClick} />
      </div>
    </div>
  );
}

export default MenuDropdown;
