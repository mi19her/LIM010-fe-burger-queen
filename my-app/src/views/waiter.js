import React, { useState } from "react";
import logo from "../img/logoBurger.png";
import { Products } from '../components/Products';
import { Order } from '../components/Order';
import "../css/App.css";

export const Waiter = () => {
  const [selectProduct, setOrder] = useState([]);

  const incrementar = (prodId, cant) => {
    const arrNew = selectProduct.map(element => {
      if (prodId === element.id) {
        element.cantidad = cant;
      }
      return element;
    })
    setOrder(arrNew);
  }

  return (
    <div>
      <header className="Flex-header">
        {/* <h2> Burger Queen </h2> */}
        <img src={logo} alt="imagen de product" className="Burger-log" />
      </header>
      <main>
        <section className="Flex">
          <Products addProductAtOrder={(product) => {
            const found = selectProduct.find(p => {
              return p.id === product.id
            });

            if (found !== undefined) {
              const newArr = selectProduct.map(p => {
                if (found.id === p.id) {
                  // p.cantidad = p.cantidad + 1;
                  p.disable = true;
                }
                return p;
              })
              setOrder(newArr);
            } else {
              setOrder([...selectProduct, { ...product, cantidad: 1 }])
            }
          }} />
          <Order products={selectProduct} cantidad={incrementar} />
        </section>
      </main>
    </div>
  )
}