import React from "react";
import { Link } from "react-router-dom";

export const Welcome =()=>{
    return (
     <div className="App">
       <header className="App-header">
       {/* <h1 className="App-link">Bienvenidos</h1> */}
       <img src="../img/logoBurger.png" alt={"imagen de product"} className="Width-product"/>
       <button className= "" id="ingresar"><Link to="/waiter"> Mesero </Link></button>
       </header>
     </div>
    )}