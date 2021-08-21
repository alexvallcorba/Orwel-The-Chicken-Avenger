import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

function NavBar() {
  return (
    <ul className="nav-bar">
      <li>
        <Link to="/heroes">
          <img
            className="links"
            id="link1"
            src="https://i.imgur.com/CNwhMRO.png"
            alt="Heroes Tab"
          />
        </Link>
      </li>
      <li>
        <Link to="/villains">
          <img
            className="links"
            id="link2"
            src="https://i.imgur.com/jkRyfYC.png"
            alt="villains Tab"
          />
        </Link>
      </li>
      <li>
        <Link to="/addcharacter">
          <img
            className="links"
            id="link3"
            src="https://i.imgur.com/CCJkzoe.png"
            alt="New Characters Tab"
          />
        </Link>
      </li>
    </ul>
  );
}

export default NavBar;
