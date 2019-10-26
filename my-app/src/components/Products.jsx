import React, { useState, useEffect } from "react";
import firebase from '../firebase-config';
import '../css/App.css';

export const Products = ({ addProductAtOrder }) => {
  const [arr, setOrder] = useState([]);
  const [type, setType] = useState('desayuno');

  useEffect(() => {
    firebase.firestore().collection("products").where("tipo", "==", type)
      .get()
      .then(querySnapshot => {
        const array = [];
        querySnapshot.forEach(doc => {
          array.push({ id: doc.id, ...doc.data() });

        });
        setOrder(array);
      })
      .catch(error => {
        console.log("Error getting documents: ", error);
      });
  }, [type])
  
  return (
    <div className="menu">
      <h1>LISTA DE PRODUCTOS</h1>
      <div>
      
        <button className="buttonApp" onClick={() => setType("desayuno")}> Desayuno </button>
        <button className="buttonApp" onClick={() => setType("almuerzo_cena")}> Almuerzo y cena </button>
      </div>
      <div className="Scroll">
        {arr.map(product => {
          return (
            <div key={product.id} onClick={() => addProductAtOrder(product)}>
              <p className="name">{product.nombre}</p>
              <p className="price">S/.{product.precio}</p>
              <img src={product.url} alt={"imagen de product"} className="Width-product " />
            </div>)
        })}
      </div>
    </div>
  );
};
