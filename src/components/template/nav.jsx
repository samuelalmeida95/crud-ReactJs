import "./nav.css";
import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => (
  <aside className="menu-area">
    <nav className="menu">
      <Link to="/">
        <i className="fa fa-home"></i> Início
      </Link>

      <Link to="/users">
        <i className="fa fa-pencil"></i> Cadastrar usuarios
      </Link>
    </nav>
  </aside>
);

export default Nav;
