import React from "react";
import "./SidebarOption.css";

function SidebarOption({ Icon, title, number, selected, bold, click }) {
  return (
    <div
      className={`sidebar__option df aic ${selected && "sidebar--selected"} ${
        bold && "option--bold"
      }`}
      onClick={click && (() => click())}
    >
      <Icon />
      <span className="option-span">{title}</span>
      <span className="badge-span">{number}</span>
    </div>
  );
}

export default SidebarOption;
