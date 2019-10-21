import React from "react";
import logo from "../img/logoBurger.png";
import { Products } from '../components/Products';
import { Pedido } from '../components/Pedido';

export const Waiter = () => {
  // const [name, setName] = useState('');
  // const functionName = (e) => {
  //   setName(e.target.value);
  //   console.log(e.target.value);
    
  // }
    return(
        <div>
           <header>
               <h2> Burger Queen </h2>
               <img src={logo} alt="imagen de product" className="Burger-logo"/>
            </header>
            <main>
              <section className="Flex">
                <Products></Products>
                {/* <button>Almuerzo y Cena</button> */}
              {/* </section> */}
              {/* <section> */}
                  {/* <input placeholder="Nombre" value = {name} onChange = {functionName}></input>
                  <input placeholder="N° de Mesa"></input>
                  <p>Lista de Pedidos</p>
                  <div></div> */}
                  <Pedido></Pedido>
              </section>
            </main>
        </div>
    )
}