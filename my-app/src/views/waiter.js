import React, { useState } from "react";
// import logo from "../img/logoBurger.png";
// import { Link } from "react-router-dom";
import { Products } from '../components/Products';
import { Order } from '../components/Add-order';
import { Header } from '../components/Header';
import { NavWaiter } from '../components/Nav-waiter';
import "../css/App.css";
// import { addOrderFirebase } from "../components/Save-orders"

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
  // const sendOrder = (name, mesa)=>{
  //   const allDate = new Date();
  //   selectProduct.map(ele =>{
  //     addOrderFirebase(name, mesa, ele.cantidad, ele.nombre, allDate)
  //   return ele;
  //   })
  // }
  const Total = () => {
    let acum = 0;
    selectProduct.map(p => acum += p.precio * p.cantidad);
    return acum;
  };

  return (
    <div>
      {/* <header className="Flex-header">
        <Link to="/"><img src={logo} alt="imagen de product" className="Burger-log" /></Link>
      </header> */}
      <Header></Header>
      <NavWaiter></NavWaiter>
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
          <Order products={selectProduct} cantidad={incrementar} total={Total} deleteRow={(element) => {
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