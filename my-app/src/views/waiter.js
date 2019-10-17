import React, {useState} from "react";
import { Product } from '../components/Product'
 
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
                <Product/>
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