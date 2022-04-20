import { useState } from "react";

import "./App.css";

function LoginBox({ logInFunc }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
          // Make calls to database or whatever
          console.log(
            "The username is " + username + " and the password is " + password
          );
          logInFunc();
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default LoginBox;
