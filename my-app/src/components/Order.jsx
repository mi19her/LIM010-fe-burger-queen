import React from "react";
// import "";
const { useState } = React;

export const Order = ({ products, cantidad }) => {
  const [name, setName] = useState('');
  // const [cant, setCant] = useState('1');
  const functionName = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  }
  // const functionCant = (e) => {
  //   setCant(e.target.value);
  //   // console.log(e.target.value);
  // }
  return (
    <div>
      <input placeholder="Nombre" value={name} onChange={functionName}/>
      <input placeholder="N° de Mesa"></input>
      <p>Lista de Pedidos</p>
      <table>
        <thead>
          <tr>
            <td>CANT.</td>
            <td>DESCRIPCIÓN</td>
            <td>PU</td>
            <td>TOTAL</td>
          </tr>
        </thead>
        <tbody >
        {products.map(product => (
            <tr key={product.id}>
              <td><input type="number" min="1" max="100" defaultValue={product.cantidad} onClick={(e) => {
              const p = e.target.value;
              cantidad(product.id, p)
              }}/></td>
              <td>{product.nombre}</td>
              <td>{product.precio}</td>
              <td>{product.precio*product.cantidad}</td>
            </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}
