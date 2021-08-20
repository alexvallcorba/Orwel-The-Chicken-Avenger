import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <ul className="nav-bar">
      <li>
        <Link to="/heroes">
          <h1>Heroes</h1>
        </Link>
      </li>
      <li>
        <Link to="/villans">
          <h1>Villans</h1>
        </Link>
      </li>
      <li>
        <Link to="/character/add">
        <h1>Add Character</h1>
        </Link>
      </li>
    </ul>
  );
}

export default NavBar;
        
