import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logoBurger.png';
import '../css/App.css';

export const Welcome = () => {
  return (
    <div className="App-header">
      <img src={logo} alt="imagen de product" className="Burger-logo" />
      <button type="button" className="Button-mesero" id="ingresar"><Link to="/waiter"> Mesero </Link></button>
      <button type="button" className="Button-mesero" id="ing"><Link to="/chef"> Jefe de Cocina </Link></button>
    </div>
  );
};
