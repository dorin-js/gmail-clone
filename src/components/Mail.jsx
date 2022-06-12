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
import { selectViewedMail } from "../features/mailSlice";
import { useSelector } from "react-redux";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

function Mail() {
  const navigate = useNavigate();
  const viewedMail = useSelector(selectViewedMail);
  const deleteEmail = async (id) => {
    const ref = doc(db, "emails", id);
    await deleteDoc(ref);
    navigate("/");
  };
  return (
    <div className="mail">
      <div className="mail__tools df aic jcsb">
        <div className="mail__tools--left">
          <IconButton onClick={() => navigate("/")}>
            <ArrowBackOutlined style={{ color: "red" }} />
          </IconButton>
          <IconButton>
            <MoveToInboxOutlined />
          </IconButton>
          <IconButton>
            <ErrorOutlineOutlined />
          </IconButton>
          <IconButton onClick={() => deleteEmail(viewedMail?.id)}>
            <DeleteOutlined style={{ color: "red" }} />
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
          <h2 className="mail__subject">{viewedMail?.subject}</h2>
          <IconButton>
            <LabelImportant className="mail__important" />
          </IconButton>
        </div>
        <div className="mail__header__sender df jcsb">
          <div className="sender__info">
            <span className="sender__title">{viewedMail?.title}</span>
            <span className="sender__email">
              {" "}
              {"<"}info@mail.com{">"}
            </span>
          </div>
          <div className="sender__time">{viewedMail?.time}</div>
        </div>
        <div className="mail__message">
          <code>{viewedMail?.description}</code>
        </div>
      </div>
    </div>
  );
}

export default Mail;
