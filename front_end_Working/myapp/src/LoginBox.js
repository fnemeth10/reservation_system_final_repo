import React, { useState } from "react";
//import { Route,Link } from "react-router-dom";
import { Route, Link, useNavigate } from "react-router-dom";

import CreatingAccount from "./CreatingAccount";
import "./App.css";
//import "./CreatingAccount";

function LoginBox({ logInFunc }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  //history.push('/AskingInfo');

  const sendSubmit = () => {};
  return (
    <div className="loginBox">
      <h1>Login page</h1>
      <div>
        Username:{" "}
        <input
          onChange={(event) => {
            setUsername(event.currentTarget.value);
          }}
        />
      </div>
      <div>
        Password:{" "}
        <input
          onChange={(event) => {
            setPassword(event.currentTarget.value);
          }}
        />
      </div>
      <button
        onClick={() => {
          navigate("/Navbar", {});

          // Make calls to database or whatever
          // console.log(
          //   "The username is " + username + " and the password is " + password
          // );
          // logInFunc();
        }}
      >
        Submit
      </button>

      <div>
        <nav>
          <button>
            <Link
              to="CreatingAccount"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Sign up
            </Link>
          </button>
        </nav>
      </div>
    </div>
  );
}

export default LoginBox;

//<li><a href="CreatingAccount.js">SIGN UP</a></li>

/*<body>
    <header>
        <nav>
            <ul>
                <li><a href="signUp.html">SIGN UP</a></li>
</ul>
        </nav>
        <hr>
        <h1>YOUR STORE NAME</h1>
    </header>
    
    <nav>
          <a href="./CreatingAccount">
            <button>Sign up</button>
          </a>
        </nav>*/
