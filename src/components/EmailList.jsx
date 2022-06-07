import React from "react";
import "./EmailList.css";
import { Checkbox, IconButton } from "@mui/material";
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  KeyboardHide,
  MoreVert,
  Redo,
} from "@mui/icons-material";
function EmailList() {
  return (
    <div className="email-list">
      <div className="email-list__settings df jcsb">
        <div className="email-list__settings--left">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="email-list__settings--right">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default EmailList;
