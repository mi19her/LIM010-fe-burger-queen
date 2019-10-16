import React from "react";
import firebase from '../firebase-config';


// export const pedidos = () =>{
//   firebase.firestore().collection('pedidos').add({
//     cantidad : '1',
//     nombre: 'hamburguesa',
//     precio : 'S/ 5:00',
//   });
// }

// export const Product = () =>{
//     const handleClick = (e) => {
//       e.preventDefault();
//       console.log('hola eli'); 
      
//     }
//     return (
//       <button onClick={handleClick}>Desayuno</button>
//     );
//   }
// const { useState } = React

export const Pedidos = () =>{
firebase.firestore().collection("products").where("tipo", "==", "desayuno")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log([doc.id, " => ", doc.data()]);
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
  }

export const Desayuno = ({ click }) => (
  <div>
    <button onClick={click} id ="desayuno"> Desayuno </button>
  </div>
);

export const Product= () => {
  
  // const [arrBreakfast, takeBreakfast ] = useState([]);
  return (
    <div>
      <h1>Hola</h1>
      <Desayuno 
        click={() => {
          Pedidos();
        }} 
      />
      {/* <Pedidos/> */}
    </div>
  );
};
