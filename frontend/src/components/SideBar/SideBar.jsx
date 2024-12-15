import { DropdownMenu } from "./DropdownMenu";
import { useState } from "react";
import "./SideBar.css";

export function SideBar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  function toggleDropdown(dropdown) {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  }

  const filters = ["Город", "Роль", "Подразделение", "Должность"];
  return (
    <div className="sidenav">
      {filters.map((filterName) => (
        <DropdownMenu
          toggleDropdown={toggleDropdown}
          active={activeDropdown === filterName}
          key={filterName}
        >
          {filterName}
        </DropdownMenu>
      ))}
    </div>
  );
}
