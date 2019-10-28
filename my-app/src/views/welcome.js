import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logoBurger.png";
import '../css/App.css';

export const Welcome = () => {
  return (
    <div className="App-header">
      {/* <header className="App-header"> */}
        {/* <h1 className="App-link">Bienvenidos</h1> */}
        <img src={logo} alt="imagen de product" className="Burger-logo" />
        <button className="Button-mesero"><Link to="/waiter"> Mesero </Link></button>
        <button className="Button-mesero" ><Link to="/chef"> Jefe de Cocina </Link></button>
      {/* </header> */}
    </div>
  )
}
