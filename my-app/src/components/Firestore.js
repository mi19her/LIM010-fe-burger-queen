import firebase from 'firebase/app';
import 'firebase/firestore';
// import React, { useState, useEffect } from "react";

export const addOrderFirebase = (cant, name, subtotal) => firebase.firestore().collection('order').add({
    cant,
    name,
    subtotal,
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
            // console.log(array);
            setgetOrder(array);
          })
          .catch(error => {
            console.log("Error getting documents: ", error);
          });
      }, [type])
}