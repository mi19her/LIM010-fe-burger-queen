// import React, { useState, useEffect } from "react";
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import { OrderStructure } from "../components/OrderStructure";

// export const ReadyOrders = () => {
//   const [arrReady, setReadyOrders] = useState([]);
//   useEffect(() => {
//     firebase.firestore().collection('order')
//       .where("estado", "==", "listo")
//       .orderBy('date', 'desc')
//       .get()
//       .then(querySnapshot => {
//         setReadyOrders(querySnapshot.docs.map(snapOrder => ({ id: snapOrder.id, ...snapOrder.data() })));
//       })
//       .catch(error => {
//         console.log("Error getting documents: ", error);
//       })
//   })
//   const Delivered = (id) => {
//     firebase
//     .firestore()
//     .collection('order')
//     .doc(id)
//     .update({
// 			estado: 'entregado'
// 		});
// 	}

//   return (
//     <OrderStructure arr={arrReady} update={Delivered}/>
//   )
// }