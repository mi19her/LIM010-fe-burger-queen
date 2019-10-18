import React, {useState, useEffect } from "react";
import firebase from '../firebase-config';



export const getlist = () =>{
  return firebase.firestore().collection("products").where("tipo", "==", "desayuno" )
    .get()
    .then((querySnapshot) => {
      const arr = []
        querySnapshot.forEach(function(doc) {
            arr.push({id: doc.id, ...doc.data()})
            
        });
        return arr;
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
  }

export const Breakfast = ({ click }) => (
  <div>
    <button onClick={click}> Desayuno </button>
  </div>
);

export const Lunch = ({ click }) => (
  <div>
    <button onClick={click}> Almuerzo y Cena</button>
  </div>
);


export const Product= () => {
  const [arrlist, setlist ] = useState([]);

  useEffect(() => {
    getlist()
    .then((result)=>{
      setlist(result);
    })
  }, []);

  return (
    <div>
      <Breakfast
        click={() => {
        }} 
      />
      <Lunch/>
      {arrlist.map(element =>
      <li>{element.nombre}</li>
    )}
    </div>
  );
};
