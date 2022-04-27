import React from "react";
import "./LoginBox";
import "./AskingInfo";
import { Route, Link, useNavigate } from "react-router-dom";

function ManageRes() {
  return (
    <div>
      <button>Delete Reservation</button>

      <div>
        <button>Change Time</button>
      </div>

      <div>
        <button>Change Number Of Seats</button>
      </div>
    </div>
  );
}
export default ManageRes;
