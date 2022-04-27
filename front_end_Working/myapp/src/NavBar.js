import React from "react";
import "./LoginBox";
import "./AskingInfo";
import "./ManageRes";
import { Route, Link, useNavigate } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
      <h1>Welcome</h1>
      <>What would you like to do?</>
      <></>
      <div>
        <nav>
          <button>
            <Link
              to="/AskingInfo"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Make Reservation
            </Link>
          </button>
        </nav>
        {/* Make link for new page here */}
        <nav>
          <button>
            <Link
              to="/ManageRes"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Manage Reservation
            </Link>
          </button>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
