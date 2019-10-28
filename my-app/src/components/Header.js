import React from "react";
import logo from "../img/logoBurger.png";
import { Link } from "react-router-dom";
import "../css/App.css";

export const Header = () => {
  return (
    <header className="Flex-header">
      <Link to="/"><img src={logo} alt="imagen de product" className="Burger-log" /></Link>
    </header>
  )
}