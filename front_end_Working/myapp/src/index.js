import React from "react";
import ReactDOM from "react-dom/client";
//import './index.css';
import App from "./App";
import AskingInfo from "./AskingInfo";
import NavBar from "./NavBar";
import ManageRes from "./ManageRes";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatingAccount from "./CreatingAccount";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/CreatingAccount" element={<CreatingAccount />} />

      <Route path="/" element={<App />} />

      <Route path="/AskingInfo" element={<AskingInfo />} />

      <Route path="/NavBar" element={<NavBar />} />

      <Route path="/ManageRes" element={<ManageRes />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

/*<React.StrictMode>
    <App />
  </React.StrictMode>*/
