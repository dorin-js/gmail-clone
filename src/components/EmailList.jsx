import React, { useEffect, useState } from "react";
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
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import EmailRow from "./EmailRow";
import { db } from "../firebase/firebase";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";

function EmailList() {
  const [emails, setEmails] = useState(null);
  // console.log("first");
  useEffect(() => {
    // const getData = async () => {
    let q = collection(db, "emails");
    let qu = query(q, orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(qu, (querySnapshot) => {
      let results = [];
      querySnapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setEmails(results);
    });

    console.log(emails);
    return () => unsubscribe();
  }, ["emails"]);

  return (
    <div className="email-list">
      <div className="email-list__settings df aic jcsb">
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
        <Section Icon={PeopleOutlinedIcon} title="Social" color="dodgerblue" />
        <Section Icon={SellOutlinedIcon} title="Promotions" color="green" />
      </div>
      <div className="email-list__emails">
        {!emails && <h4 className="loading">Loading...</h4>}
        {emails &&
          emails.map((mail) => (
            <EmailRow
              key={mail.id}
              id={mail.id}
              title={mail.to}
              subject={mail.subject}
              description={mail.message}
              time={new Date(mail.timestamp?.seconds * 1000).toLocaleString()}
            />
          ))}
        {/* <EmailRow
          id="42314xzv"
          title="Twitch"
          subject="Hey fellow streamer!!!"
          description="This is a test"
          time="10pm"
        />
        <EmailRow
          id="dsfzcvzxv98"
          title="Dorin"
          subject="Test test!!!"
          description="This is a test"
          time="10pm"
        />
        <EmailRow
          id="fsdaxdsa987"
          title="Epic games"
          subject="Password confirmation!!!"
          description="Pleace confirm your email address with the code provided bellow or click on the link to confirm it"
          time="10pm"
        /> */}
      </div>
    </div>
  );
}

export default EmailList;
