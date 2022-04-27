import React, { useState } from "react";
import "./App.css";
import LoginBox from "./LoginBox";
import CreatingAccount from "./CreatingAccount";
//import AskingInfo from "./AskingInfo";
//import { BrowserRouter, Route, Routes, useHistory } from "react-router-dom";

import { Button } from "reactstrap";
import { Route, Link, useNavigate } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      {loggedIn ? (
        <>Welcome</>
      ) : (
        <LoginBox logInFunc={() => setLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
