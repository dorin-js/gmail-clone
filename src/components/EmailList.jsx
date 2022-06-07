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
import Section from "./Section";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";

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
      <div className="email-list__sections df aic">
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleOutlinedIcon} title="Social" color="blue" />
        <Section Icon={ForumOutlinedIcon} title="Forums" color="green" />
      </div>
      <div className="email-list__emails"></div>
    </div>
  );
}

export default EmailList;
