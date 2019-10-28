import React from "react";
import { Link } from "react-router-dom";
import '../css/App.css';
// import { ReadyOrder } from './Ready-orders';

export const NavChef = () => {
  return (
    <div className="Nav-waiter">
      <button className="Nav-btn" id=""><Link to="/"> Home </Link></button>
      <button className="Nav-btn" id=""><Link to="/ready"> Pedidos listos</Link></button>
      <button className="Nav-btn" id=""><Link to="/delivered"> Pedidos entregados </Link></button>
    </div>
  )
}