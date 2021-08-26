import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Chicken from "../services/sounds/chicken.wav";
import useSound from "use-sound";


function Header() {
  const [play] = useSound(Chicken);
  const handleSound = () => {
    play();
  };

  return (
    <div className="header-logo">
      <Link to="/">
        <img
            onClick={handleSound}
          
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
