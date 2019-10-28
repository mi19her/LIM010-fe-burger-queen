import React, { useState, useEffect } from "react";
import firebase from 'firebase/app';
import 'firebase/firestore';
import { OrderStructure } from "../components/OrderStructure";

export const GetOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    firebase.firestore().collection('order')
      .where("estado", "==", "pendiente")
      // .orderBy('date', 'asc')
      .orderBy("date")
      .get()
      .then(querySnapshot => {
        console.log(querySnapshot);
        setOrders(querySnapshot.docs.map(snapOrder => ({ id: snapOrder.id, ...snapOrder.data() })));
      })
      .catch(error => {
        console.log("Error getting documents: ", error);
      });
  }, [])

  const Ready = (id) => {
    firebase.firestore().collection('order').doc(id).update({
      estado: 'listo'
    });
  }

  return (
    <OrderStructure arr={orders} update={Ready} />
  )
}