import React, { useState, useEffect } from "react";
import firebase from 'firebase/app';
import 'firebase/firestore';
import { OrderStructure } from "../components/OrderStructure";

export const GetOrder = () => {
  const [arrOrders, setgetOrder] = useState([]);
  useEffect(() => {
    firebase.firestore().collection('order').where("estado", "==", "pendiente").orderBy('date', 'asc')
      .get()
      .then(querySnapshot => {
        const array = [];
        querySnapshot.forEach((doc) => {
          array.push({ id: doc.id, ...doc.data() });
          // console.log(array);
        });
        setgetOrder(array);
      })
      .catch(error => {
        console.log("Error getting documents: ", error);
      });
  })

  const Ready = (id) => {
    firebase.firestore().collection('order').doc(id).update({
      estado: 'listo'
    });
  }

  return (
    <OrderStructure arr={arrOrders} update = {Ready}/>
  )
}