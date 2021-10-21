import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import "../assets/styles/components/Menu.scss";
const Menu = () => {
  return (
    <Link to="/" className="FinamigaTestBar">
      <img src={logo} alt="logo" />
      <h1>Finamiga Test</h1>
    </Link>
  );
};

export default Menu;
