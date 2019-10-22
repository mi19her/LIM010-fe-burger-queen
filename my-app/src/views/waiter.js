import React, {useState} from "react";
import logo from "../img/logoBurger.png";
import { Products } from '../components/Products';
import { Order } from '../components/Order';

export const Waiter = () => {
  const [selectProduct, setOrder] = useState([]);

    return(
        <div>
           <header>
               <h2> Burger Queen </h2>
               <img src={logo} alt="imagen de product" className="Burger-logo"/>
            </header>
            <main>
              <section className="Flex">
                <Products addProductAtOrder={(product) => {
                  setOrder([...selectProduct,product])
                }}/>
                  <Order products={selectProduct}/>
              </section>
            </main>
        </div>
    )
}