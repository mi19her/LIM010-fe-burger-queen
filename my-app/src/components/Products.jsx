import React from "react";
import firebase from '../firebase-config';

const { useState, useEffect } = React;

export const Products = () => {
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
      <button onClick={()=> setType("desayuno")}> Desayuno </button>
      <button onClick={() => setType("almuerzo_cena")}> Almuerzo y cena </button>
      {arr.map(products => {
        return (
        <div key={products.id}>
          <p>{products.nombre}</p>
          <p>{products.precio}</p>
          <img src={products.url} alt={"imagen de product"} className="Width-product "/>
        </div>)
      })}
    </div>
  );
};
