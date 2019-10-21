import React from "react";

const { useState } = React;

export const Pedido = ({products}) => {
  const [name, setName] = useState('');
  const functionName = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  }
  return (
    <div>
      <input placeholder="Nombre" value = {name} onChange = {functionName}></input>
      <input placeholder="N° de Mesa"></input>
      <p>Lista de Pedidos</p>
      <table>
        <tr>
          <td>Nombre</td>
          <td>Precio</td>
        </tr>
        <tr>
          <td>{product.nombre}</td>
          <td>{product.precio}</td>
        </tr>
      </table>
    </div>
  )
}