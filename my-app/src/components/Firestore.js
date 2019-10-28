import firebase from 'firebase/app';
import 'firebase/firestore';
// import React, {useEffect, useState} from "react"

export const addOrderFirebase = (name, mesa, cant, product, date) => firebase.firestore().collection('order').add({
    name,
    mesa,  
    cant,
    product,
    date,
  });
