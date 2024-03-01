import React from "react";
import "./Header.css";
import alert from "./alert.png";
import mail from "./mail.png";
import user from "./user.png";

function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <input type="text" placeholder="search ...." className="searchbtn" />
      </div>
      <div className="headerIcons">
        <img src={alert} id="icon" />
        <img src={mail} id="icon" />
        <img src={user} id="icon" />
      </div>
    </div>
  );
}

export default Header;
