// React & react-router-dom
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//CSS
import "./App.css";

//Components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import EmailList from "./components/EmailList";
import Mail from "./components/Mail";
import SendMail from "./components/SendMail";
import SimpleSnackbar from "./components/Snackbar";
import EnhancedTable from "./pages/Table";
import Login from "./components/Login";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { login, selectAuthentificatedUser } from "./features/userSlice";
import {
  selectSendMessageIsOpen,
  selectSnackbarVisibility,
} from "./features/mailSlice";

//Firebase auth
import { auth } from "./firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const dispatch = useDispatch();
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const snackbarVisibility = useSelector(selectSnackbarVisibility);
  const authentificatedUser = useSelector(selectAuthentificatedUser);

  //For login to persist
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            dispalyName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      }
    });
  }, []);

  return (
    <BrowserRouter>
      {!authentificatedUser ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app__body df">
            <Sidebar />
            <Routes>
              <Route path="/" element={<EmailList />} />
              <Route path="/mail/:id" element={<Mail />} />
              <Route path="/table" element={<EnhancedTable />} />
            </Routes>
          </div>
          {sendMessageIsOpen && <SendMail />}
          {snackbarVisibility && <SimpleSnackbar />}
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
