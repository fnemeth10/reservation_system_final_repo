import React, { useState } from "react";
import { Dropdown } from "bootstrap";
import "./CreatingAccount";
import "./LoginBox";

function AskingInfo() {
  const [isOpen, setIsOpen] = useState(false);
  const click = () => setIsOpen(!isOpen);

  return (
    <div className="AskingInfo">
      <></>

      <h1>Fill in information to reserve a spot</h1>
      <div>
        <label>seat</label>
        <input placeholder="# of seat" />

        <label>phone number</label>
        <input placeholder=" 000-000-0000 format" />
      </div>

      <button>confirm</button>
    </div>
  );
}

export default AskingInfo;
{
  /* <DropDownContainer>
        <DropDownHeader onClick={click}>Which hour?</DropDownHeader>
        <DropDownListContainer>
          <DropDownList>
            <ListItem>5:00</ListItem>
            <ListItem>6:30</ListItem>
            <ListItem>8:00</ListItem>
            <ListItem>9:30</ListItem>
            <ListItem>11:00</ListItem>
            <ListItem>12:30</ListItem>
          </DropDownList>
        </DropDownListContainer>
      </DropDownContainer>

      <DropDownContainer>
        <DropDownHeader onClick={click}>Which meridiem?</DropDownHeader>
        <DropDownListContainer>
          <DropDownList>
            <ListItem>AM</ListItem>
            <ListItem>PM</ListItem>
          </DropDownList>
        </DropDownListContainer>
      </DropDownContainer> */
}
