import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmailList from "./components/EmailList";
import Mail from "./components/Mail";
import SendMail from "./components/SendMail";
import { useSelector } from "react-redux";
import {
  selectSendMessageIsOpen,
  selectSnackbarVisibility,
} from "./features/mailSlice";
import SimpleSnackbar from "./components/Snackbar";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const snackbarVisibility = useSelector(selectSnackbarVisibility);
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="app__body df">
          <Sidebar />
          <Routes>
            <Route path="/" element={<EmailList />} />
            <Route path="/mail/:id" element={<Mail />} />
          </Routes>
        </div>
        {sendMessageIsOpen && <SendMail />}
        {snackbarVisibility && <SimpleSnackbar />}
      </div>
    </BrowserRouter>
  );
}

export default App;
