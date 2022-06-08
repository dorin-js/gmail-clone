import {
  ArrowBackOutlined,
  CheckCircleOutlined,
  ChevronLeft,
  ChevronRight,
  DeleteOutlined,
  EmailOutlined,
  ErrorOutlineOutlined,
  KeyboardHide,
  LabelImportant,
  LabelOutlined,
  MoreVertOutlined,
  MoveToInboxOutlined,
  WatchLaterOutlined,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Mail.css";

function Mail() {
  const navigate = useNavigate();
  return (
    <div className="mail">
      <div className="mail__tools df aic jcsb">
        <div className="mail__tools--left">
          <IconButton onClick={() => navigate("/")}>
            <ArrowBackOutlined />
          </IconButton>
          <IconButton>
            <MoveToInboxOutlined />
          </IconButton>
          <IconButton>
            <ErrorOutlineOutlined />
          </IconButton>
          <IconButton>
            <DeleteOutlined />
          </IconButton>
          <IconButton>
            <EmailOutlined />
          </IconButton>
          <IconButton>
            <WatchLaterOutlined />
          </IconButton>
          <IconButton>
            <CheckCircleOutlined />
          </IconButton>
          <IconButton>
            <LabelOutlined />
          </IconButton>
          <IconButton>
            <MoreVertOutlined />
          </IconButton>
        </div>
        <div className="mail__tools--right">
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
      <div className="mail__body df">
        <div className="mail__header__title df aic">
          <h2 className="mail__subject">Subject</h2>
          <IconButton>
            <LabelImportant className="mail__important" />
          </IconButton>
        </div>
        <div className="mail__header__sender df jcsb">
          <div className="sender__info">
            <span className="sender__title">Twitch</span>
            <span className="sender__email">
              {" "}
              {"<"}info@twitch.com{">"}
            </span>
          </div>
          <div className="sender__time">7:12 AM</div>
        </div>
        <div className="mail__message">
          <pre>
            Pleace confirm your email address with the code provided bellow or
            click on the link to confirm it
          </pre>
        </div>
      </div>
    </div>
  );
}

export default Mail;
