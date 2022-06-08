import React from "react";
import "./SendMail.css";
import MinimizeOutlinedIcon from "@mui/icons-material/MinimizeOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Button, IconButton } from "@mui/material";

function SendMail() {
  return (
    <div className="send-mail df">
      <div className="send-mail__header df aic jcsb pl15">
        <h4>New Message</h4>
        <div className="send-mail__header__options">
          <IconButton>
            <MinimizeOutlinedIcon className="send-mail__options--icons" />
          </IconButton>
          <IconButton>
            <CloseOutlinedIcon className="send-mail__options--icons" />
          </IconButton>
        </div>
      </div>
      <form className="mail-form df pl15">
        <input
          type="text"
          placeholder="Recipient"
          aria-label="recipient's email"
        />
        <input type="text" placeholder="Subject" aria-label="subject" />
        <textarea
          aria-label="message"
          className="mail-form__input--large"
        ></textarea>
        <div className="send-mail__footer__options">
          <Button className="submit-button" variant="contained" type="submit">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
