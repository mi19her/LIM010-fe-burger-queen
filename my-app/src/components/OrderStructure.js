import React from "react";
import '../css/App.css';

export const OrderStructure = ({arr, update}) => (<div>
  {arr.map(product => {
    return (<div className="Order" key={product.id}>
      <h2>PEDIDO {product.estado}</h2>

      <p className="">{product.name}</p>
      <p className="">{product.mesa}</p>
      <p className="">Hora de Pedido: {product.date.toDate().getHours()}{':'}{product.date.toDate().getMinutes()}</p>

      <table className="">
        <thead>
          <tr>
            <th colSpan="5">DETALLE DE PEDIDO</th>
          </tr>
          <tr>
            <td>CANT.</td>
            <td>DESCRIPCIÓN</td>
            <td>PU</td>
            <td>SUBTOTAL</td>
          </tr>
        </thead>
        <tbody>
          {product.product.map(p => {
            return (<tr key={p.nombre}>
              <td>{p.cantidad}</td>
              <td>{p.nombre}</td>
              <td>{p.precio}</td>
              <td>{p.cantidad * p.precio}</td>
            </tr>);
          })}
        </tbody>
      </table>
      <p className="">Total = S/.{product.total}</p>
      <button type="button" className="btn col" onClick={() => { update(product.id) } }></button>
    </div>);
  })}
</div>)