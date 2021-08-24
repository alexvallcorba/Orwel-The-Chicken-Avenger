import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header-logo">
      <Link to="/">
        <img
          id=""
          src="https://i.imgur.com/wRGhua3.png"
          className="orwel-logo"
          alt="orwell logo"
        />
      </Link>
    </div>
  );
}

export default Header;
