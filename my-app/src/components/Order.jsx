import React from "react";
import "../css/App.css";

const { useState } = React;

export const Order = ({ products, cantidad, deleteRow }) => {
  const [name, setName] = useState('');

  const functionName = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  }
  const Total = (arr) => {
    let acum = 0;
    arr.map(p => acum += p.precio * p.cantidad);
    return acum;
  };

  return (
    <div>
      <input placeholder="Nombre" value={name} onChange={functionName} />
      <input placeholder="N° de Mesa"></input>
      {/* <p>DETALLE DE PEDIDO</p> */}
      <table>

        <thead>
          <tr>
            <th COLSPAN="4" >DETALLE DE PEDIDO</th>
          </tr>
          <tr>
            <td>CANT.</td>
            <td>DESCRIPCIÓN</td>
            <td>PU</td>
            <td>SUBTOTAL</td>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td><input type="number" min="1" max="100" defaultValue={product.cantidad} onClick={(e) => {
                const p = e.target.value;
                cantidad(product.id, p)
              }} /></td>
              <td>{product.nombre}</td>
              <td>{product.precio}</td>
              <td>{product.precio * product.cantidad}</td>
              <td><input type="image" alt="eliminar" src="https://img.icons8.com/windows/64/000000/xbox-x.png"
              onClick={() => { deleteRow(product)}}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>TOTAL = {Total(products)}</p>
    </div>
  )
}


