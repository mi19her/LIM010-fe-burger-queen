import React, { useState, useEffect } from "react";
import firebase from '../firebase-config';

export const Products = ({addProductAtOrder}) => {
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
        // console.log(array);
        setOrder(array);
      })
      .catch(error => {
        console.log("Error getting documents: ", error);
      });
  }, [type])

  return (
    <div>
      {/* Productos Desayuno */}
      <button onClick={()=> setType("desayuno")}> Desayuno </button>
      {/* Productos Almuerzo y cena */}
      <button onClick={() => setType("almuerzo_cena")}> Almuerzo y cena </button>
      {arr.map(product => {
        return (
        <div key={product.id} onClick={() => addProductAtOrder(product)}>
          <p>{product.nombre}</p>
          <p>{product.precio}</p>
          <img src={product.url} alt={"imagen de product"} className="Width-product "/>
        </div>)
      })}
    </div>
  );
};
