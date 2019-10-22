import React from "react";

const { useState } = React;

export const Order = ({ products }) => {
  const [name, setName] = useState('');
  const functionName = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  }
  return (
    <div>
      <input placeholder="Nombre" value={name} onChange={functionName}></input>
      <input placeholder="N° de Mesa"></input>
      <p>Lista de Pedidos</p>
      <table>
        <thead>
          <tr>
            <td>Cantidad</td>
            <td>Nombre</td>
            <td>Precio</td>
          </tr>
        </thead>
        {products.map(product => (
          <tbody  key={product.id}>
            <tr>
              <td><input type="number" min="1" max="100" defaultValue="1"/></td>
              <td>{product.nombre}</td>
              <td>{product.precio}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  )
}
