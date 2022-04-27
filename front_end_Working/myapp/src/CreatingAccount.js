import React from "react";
import "./LoginBox";

class CreatingAccount extends React.Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <h1>SIGN UP</h1>
            <label>Email address</label>
            <input placeholder="email" />
          </div>
          <div>
            <label>Password</label>
            <input placeholder="password" />
          </div>
          <div>
            <label>Confirm Password</label>
            <input type="confirm password" />
          </div>
          <button>Confirm</button>
        </form>
      </div>
    );
  }
}

export default CreatingAccount;
