import React from "react";
import firebase from '../firebase-config';
import '../css/App.css';
const { useState, useEffect } = React;

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
    <div>
      <div>
        <button onClick={() => setType("desayuno")}> Desayuno </button>
        <button onClick={() => setType("almuerzo_cena")}> Almuerzo y cena </button>
      </div>
      <div className="Scroll">
        {arr.map(product => {
          return (
            <div key={product.id} onClick={() => addProductAtOrder(product)}>
              <p>{product.nombre}</p>
              <p>{product.precio}</p>
              <img src={product.url} alt={"imagen de product"} className="Width-product " />
            </div>)
        })}
      </div>
    </div>
  );
};
