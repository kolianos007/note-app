import React from "react";
import { NavLink } from "react-router-dom";

import "./Nav.sass";

const Nav = () => {
  return (
    <nav className="nav">
      <NavLink exact activeClassName="active" to="/">
        Все записи
      </NavLink>
      <NavLink to="/executed-note">Выполненные</NavLink>
      <NavLink exact to="/unfulfilled-note">
        Невыполненные
      </NavLink>
      <NavLink to="/chosen-note">Избранное</NavLink>
      <NavLink to="/create-note">Создать</NavLink>
    </nav>
  );
};

export default Nav;
