import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmailList from "./components/EmailList";
import Mail from "./components/Mail";

function App() {
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
      </div>
    </BrowserRouter>
  );
}

export default App;
