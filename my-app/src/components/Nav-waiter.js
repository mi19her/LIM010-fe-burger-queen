import React from 'react';
import { Link } from 'react-router-dom';
import '../css/App.css';

export const NavWaiter = () => {
  return (
    <div className="Nav-waiter">
      <button className="Nav-btn" id="">
        <Link to="/"> Home </Link>
      </button>
      <button className="Nav-btn" id="">
        <Link to=""> Pedidos listos </Link>
      </button>
    </div>
  );
};
