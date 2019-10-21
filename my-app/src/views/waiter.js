import React, {useState} from "react";
import { Products } from '../components/Products'
import {Order} from '../components/Order';



export const Waiter = () => {
  const [selectProduct, setorder] = useState([]);
    return(
        <div>
           <header>
               <h2> Burger Queen </h2> 
            </header>
            <main>
              <section className= 'waiter'>
              <div className="App-logo"></div>
                <Products addProductAtOrder={(product)=>{
                  setorder([...selectProduct, product]);
                }}/>
                <Order productos={selectProduct}/>
              </section>
            </main>
        </div>
    )
}