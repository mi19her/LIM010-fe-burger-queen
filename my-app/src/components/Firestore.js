import firebase from 'firebase/app';
import 'firebase/firestore';
import React, { useState, useEffect } from "react";

export const addOrderFirebase = (name, mesa, cant, product, subtotal, total) => firebase.firestore().collection('order').add({
    name,
    mesa,  
    cant,
    product,
    subtotal,
    total
  });

export const GetOrder = ()=>{
    const [arr, setgetOrder] = useState([]);
    useEffect(() => {
        firebase.firestore().collection('order').orderBy('date', 'desc')
        .onSnapshot((querySnapshot) => {
          const array = [];
          querySnapshot.forEach((doc) => {
            array.push({ id: doc.id, ...doc.data() });
            console.log(array);
          });
            setgetOrder(array);
          })
          .catch(error => {
            console.log("Error getting documents: ", error);
          });
      }, [arr])
}