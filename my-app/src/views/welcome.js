import React from "react";
import { Link } from "react-router-dom";

export const Welcome =()=>{
    return (
     <div className="App">
       <header className="App-header">
       <h1 className="App-link">Bienvenidos</h1>
       <button className= "" id="ingresar"><Link to="/waiter"> Ingresar </Link></button>
       </header>
     </div>
    )}