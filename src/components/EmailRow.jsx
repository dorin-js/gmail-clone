import {
  LabelImportantOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./EmailRow.css";

function EmailRow({ id, title, subject, description, time }) {
  const navigate = useNavigate();
  return (
    <div className="email-row df aic" onClick={() => navigate("/mail/" + id)}>
      <div className="email-row__options options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <h4 className="email-row__title title">{title}</h4>
      <div className="email-row__message">
        <h4>
          {subject}
          <span className="email-row__description message">
            {" "}
            - {description}
          </span>
        </h4>
      </div>
      <div className="email-row__time time">{time}</div>
    </div>
  );
}

export default EmailRow;
