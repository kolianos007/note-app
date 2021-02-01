import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import icoHand from "../../assets/images/ico-hand.svg";
import "./Header.sass";

const Header = () => {
  return (
    <div className="header">
      <Link className="logo" to="/">
        <img src={logo} alt="NoteApp" />
      </Link>
      <div className="header_greeting">
        <img src={icoHand} alt="Hello" />
        <span>Привет, Коля!</span>
      </div>
      <Link className="back" to="/authorization">
        Выйти
      </Link>
    </div>
  );
};

export default Header;
