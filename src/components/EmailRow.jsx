import {
  LabelImportantOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { readMail } from "../features/mailSlice";
import "./EmailRow.css";

function EmailRow({ id, title, subject, description, time }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openMail = (event) => {
    event.stopPropagation();
    dispatch(
      readMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );

    navigate("/mail/" + id);
  };

  return (
    <div className="email-row df aic" onClick={openMail}>
      <div className="email-row__options options">
        <Checkbox onClick={(e) => e.stopPropagation()} />
        <IconButton>
          <StarBorderOutlined onClick={(e) => e.stopPropagation()} />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined onClick={(e) => e.stopPropagation()} />
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
