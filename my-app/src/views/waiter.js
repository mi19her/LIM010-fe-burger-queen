import React, {useState} from "react";
import logo from "../img/logoBurger.png";
import { Products } from '../components/Products';
import { Order } from '../components/Order';
import "../css/App.css";

export const Waiter = () => {
  const [selectProduct, setOrder] = useState([]);
  const incrementar = (prodId, cant = 1) => {
    console.log(cant, prodId)
    // let newcant = '';
    selectProduct.map(element => {
      // if(prodId === element.id) {
       element.cantidad = cant;
      //  element.subtotal = element.cantidad*element.precio;
        console.log('hola')      
      
      // newcant= element.cantidad;
      return cant;
    })
    
  }

    return(
        <div>
           <header>
               <h2> Burger Queen </h2>
               <img src={logo} alt="imagen de product" className="Burger-logo"/>
            </header>
            <main>
              <section className="Flex">
                <Products addProductAtOrder={(product) => {
                  setOrder([...selectProduct, { ...product, cantidad:1}])
                }}/>
                  <Order products={selectProduct} cantidad={incrementar}/>
              </section>
            </main>
        </div>
    )
}