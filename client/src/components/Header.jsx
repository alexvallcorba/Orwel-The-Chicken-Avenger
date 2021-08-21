import React from "react";
import { Link } from "react-router-dom";


function Header() {
  return (
    <>
      <li></li>
      <Link to="/">
        <img
          src="https://i.imgur.com/wRGhua3.png"
          className="orwel-logo"
          alt="orwell logo"
        />
      </Link>
    </>
  );
}

export default Header;
