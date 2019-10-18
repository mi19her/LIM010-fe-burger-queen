import React from "react";
import { Products } from '../components/Products'
const { useState } = React;
export const Waiter = () => {
  const [name, setname] = useState(' ');
  const functionName = (e)=>{
    setname(e.target.value);
    console.log(e.target.value);
  }
    return(
        <div>
           <header>
               <h2> Burger Queen </h2> 
            </header>
            <main>
              <section>
              <div className="App-logo"></div>
                <Products></Products>
                {/* <button>Almuerzo y Cena</button> */}
              </section>
              <section>
                  <input placeholder="Nombre" value={name} onChange={functionName}></input>
                  <input placeholder="N° de Mesa"></input>
                  <p>Lista de Pedidos</p>
                  <div></div>
              </section>
            </main>
        </div>
    )
}