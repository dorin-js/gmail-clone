import React from "react";

//CSS
import "./SendMail.css";

//Material UI
import MinimizeOutlinedIcon from "@mui/icons-material/MinimizeOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Button, IconButton } from "@mui/material";

//React hook form
import { useForm } from "react-hook-form";

//Redux
import {
  closeSendMessage,
  selectShowInputs,
  setShowInputs,
  showSnackbar,
  switchShowInputs,
} from "../features/mailSlice";
import { useDispatch, useSelector } from "react-redux";

//Firebase/Firestore
import { db } from "../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function SendMail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const showInputs = useSelector(selectShowInputs);

  const onSubmit = (formData) => {
    try {
      const docRef = addDoc(collection(db, "emails"), {
        to: formData.to,
        subject: formData.subject,
        message: formData.message,
        timestamp: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);
      dispatch(closeSendMessage());
      dispatch(showSnackbar());
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Error sending email: ", e);
    }
  };

  return (
    <div className="send-mail df">
      <div
        className="send-mail__header df aic jcsb pl15"
        onClick={(event) => {
          event.stopPropagation();
          dispatch(switchShowInputs());
        }}
      >
        <h4>New Message</h4>
        <div className="send-mail__header__options">
          <IconButton
            onClick={(event) => {
              event.stopPropagation();
              dispatch(switchShowInputs());
            }}
          >
            <MinimizeOutlinedIcon
              className={`send-mail__options--icons ${
                !showInputs && "rotated-180"
              }`}
            />
          </IconButton>
          <IconButton
            onClick={(event) => {
              event.stopPropagation();
              dispatch(closeSendMessage());
              dispatch(setShowInputs());
            }}
            style={{ zIndex: "999" }}
          >
            <CloseOutlinedIcon className="send-mail__options--icons" />
          </IconButton>
        </div>
      </div>
      {showInputs && (
        <form className="mail-form df pl15" onSubmit={handleSubmit(onSubmit)}>
          <input
            name="to"
            type="email"
            placeholder={errors.to ? "Recipient is required" : "Recipient"}
            aria-label="recipient's email"
            {...register("to", { required: true })}
            className={errors.to && "input-required"}
          />
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            aria-label="subject"
            {...register("subject")}
          />
          <textarea
            rows="15"
            name="message"
            aria-label="message"
            {...register("message")}
            className="mail-form__input--large"
          ></textarea>
          <div className="send-mail__footer__options">
            <Button className="submit-button" variant="contained" type="submit">
              Send
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}

export default SendMail;
