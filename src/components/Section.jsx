import React from "react";
import "./Section.css";

function Section({ Icon, title, color, selected }) {
  return (
    <div
      className={`email-list__section df ${selected && "section--selected"}`}
      style={{
        borderBottom: `3px solid ${color}`,
        color: `${selected && color}`,
      }}
    >
      <Icon sx={{ marginLeft: "15px" }} />
      <span>{title}</span>
    </div>
  );
}

export default Section;
