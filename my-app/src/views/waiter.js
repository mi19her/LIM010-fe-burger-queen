import React from "react";
import { Products } from '../components/Products'

export const Waiter = () => {
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
                  <input placeholder="Nombre"></input>
                  <input placeholder="N° de Mesa"></input>
                  <p>Lista de Pedidos</p>
                  <div></div>
              </section>
            </main>
        </div>
    )
}