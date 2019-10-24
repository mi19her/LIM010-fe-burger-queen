import React, {useState} from "react";
import logo from "../img/logoBurger.png";
import { Products } from '../components/Products';
import { Order } from '../components/Order';
import "../css/App.css";

export const Waiter = () => {
  const [selectProduct, setOrder] = useState([]);

  const incrementar = (prodId, cant) => {
    console.log(cant, prodId)
    const newArray = selectProduct.map(element => {
      if(prodId === element.id) {
        element.cantidad = cant;
      }
      return element;
    })
    setOrder(newArray);
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
                  const arrdupli =selectProduct.find(ele =>{
                    return ele.id === product.id;
                  })              
                  if(arrdupli !== undefined){
                    const newArray = selectProduct.map(element => {
                      if(arrdupli.id === element.id){
                        element.disabled =true
                      }
                      return element;
                    })
                    setOrder(newArray)
                  }else{
                    const arr = [...selectProduct, { ...product, cantidad:1}]
                    setOrder(arr)
                  }
                }}/>
                  <Order products={selectProduct} cantidad={incrementar} deleteRow={(element)=>{
                   const newArray = selectProduct.filter(ele=>{
                    return element.id!== ele.id;
                   })
                   setOrder(newArray)                 
                  }}/>
              </section>
            </main>
        </div>
    )
}