import React, { useState } from "react";
import logo from "../img/logoBurger.png";
import { Products } from '../components/Products';
import { Order } from '../components/Order';
import "../css/App.css";
import {addOrderFirebase} from "../components/Firestore"



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
  const sendOrder = (name, mesa)=>{
    const allDate = new Date();
    selectProduct.map(ele =>{
      addOrderFirebase(name, mesa, ele.cantidad, ele.nombre, allDate)

    })
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
                  p.disable = true;
                }
                return p;
              })
              setOrder(newArr);
            } else {
              setOrder([...selectProduct, { ...product, cantidad: 1 }])
            }
          }} />
          <Order addOrder={sendOrder} products={selectProduct} cantidad={incrementar} deleteRow={(element) => {
            const newArray = selectProduct.filter(ele => {
              return element.id !== ele.id;
            })
            setOrder(newArray)
          }}/>
        </section>
      </main>
    </div>
  )
}