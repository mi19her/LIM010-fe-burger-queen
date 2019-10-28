import React, { useState, useEffect } from "react";
import firebase from 'firebase/app';
import 'firebase/firestore';
import { OrderStructure } from "../components/OrderStructure";
// const { useState, useEffect } = React;

export const DeliveredOrders = () => {
  const [arrDelivered, setDeliveredOrders] = useState([]);
  // const [state, setState] = useState('listo');
  useEffect(() => {
    firebase.firestore().collection('order').where('estado', '==', 'entregado').orderBy('date', 'asc')
      .get()
      .then(querySnapshot => {
        const array = [];
        querySnapshot.forEach(doc => {
          array.push({ id: doc.id, ...doc.data() });

        }); 
        setDeliveredOrders(array);
      })
      .catch(error => {
        console.log("Error getting documents: ", error);
      })
  })

  return (
    <OrderStructure arr={arrDelivered}/>
  )
}