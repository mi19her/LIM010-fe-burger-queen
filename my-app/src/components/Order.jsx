import React from "react";
import "../css/App.css";

const { useState } = React;

export const Order = ({ products, cantidad, deleteRow, addOrder}) => {
  const [name, setName] = useState('');
  const [mesa, setMesa] = useState('');

  const functionName = (e) => {
    setName(e.target.value);
  }
  const functionMesa = (e) => {
    setMesa(e.target.value);
  }
  const Total = (arr) => {
    let acum = 0;
    arr.map(p => acum += p.precio * p.cantidad);
    return acum;
  };

  return (
    <div className="Order">
      <h2>PEDIDO</h2>
      <div>
        <label>Cliente: <input placeholder="Nombre" value={name} onChange={functionName}/></label><br></br>
        <label>N° Mesa: <input placeholder="N° de Mesa" value={mesa} onChange={functionMesa} ></input></label>
      </div>
      {/* <p>DETALLE DE PEDIDO</p> */}
      <table className="">
        <thead>
          <tr>
            <th colSpan="4" >DETALLE DE PEDIDO</th>
          </tr>
          <tr>
            <td>CANT.</td>
            <td>DESCRIPCIÓN</td>
            <td>PU</td>
            <td>SUBTOTAL</td>
            <td>ELIMINAR</td>
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
              <td>S/.{product.precio}</td>
              <td>S/.{product.precio * product.cantidad}</td>
              <td><i className="fa fa-minus-circle" aria-hidden="true" onClick={() => { deleteRow(product) }}></i></td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="Total">TOTAL = S/.{Total(products)}</p>
      <button onClick={() =>{addOrder(name, mesa)}}>Enviar</button>
    </div>
  )
}


