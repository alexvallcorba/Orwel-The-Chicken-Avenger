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
            id="linkid"
            src="https://i.imgur.com/CNwhMRO.png"
            alt="Heroes Tab"
          />
        </Link>
      </li>
      <li>
        <Link to="/villains">
          <img
            className="links"
            id="linkid"
            src="https://i.imgur.com/jkRyfYC.png"
            alt="villains Tab"
          />
        </Link>
      </li>
      <li>
        <Link to="/addcharacter">
          <img
            className="links"
            id="new-character"
            src="https://i.imgur.com/CCJkzoe.png"
            alt="New Characters Tab"
          />
        </Link>
      </li>
      <li>
        <Link to="/recipes">
          <img
            className="links"
            id="recipe"
            src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1634951332/portfolio/recipes-button_owzvn0.png"
            alt="recipes Tab"
          />
        </Link>
      </li>
    </ul>
  );
}

export default NavBar;
