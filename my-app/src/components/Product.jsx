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

export const Pedidos = (type) => {
  firebase.firestore().collection("products").where("tipo", "==", type)
    .get()
    .then(querySnapshot => {
      const array = [];
      querySnapshot.forEach(doc => {
        // doc.data() is never undefined for query doc snapshots
        array.push({ id: doc.id, ...doc.data() });

      });
      // console.log(array);
      return array;
    })
    .catch(error => {
      console.log("Error getting documents: ", error);
    });
}

// export const Desayuno = () => (
//   <div>
//     <button onClick={Pedidos("desayuno")} id="desayuno"> Desayuno </button>
//   </div>
// );
// export const Almuerzo = () => (
//   <div>
//     <button onClick={Pedidos("almuerzo_cena")} id="almuerzo_cena"> Almuerzo y cena </button>
//   </div>
// );
export const Product = () => {

  // const [arrBreakfast, takeBreakfast ] = useState([]);
  return (
    <div>
      {/* <h1>Hola</h1>
      <Desayuno  */}
      <button onClick={Pedidos("desayuno")} id="desayuno"> Desayuno </button>
      {/* />
      <Almuerzo />
      <Pedidos/> */}
      <button onClick={Pedidos("almuerzo_cena")} id="almuerzo_cena"> Almuerzo y cena </button>
    </div>
  );
};
