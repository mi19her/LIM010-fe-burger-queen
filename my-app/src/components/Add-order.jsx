import React from 'react';
import '../css/App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';

const { useState } = React;

export const Order = ({ products, cantidad, total, deleteRow, order }) => {
  const [name, setName] = useState('');
  const [mesa, setMesa] = useState('');

  const functionName = e => {
    setName(e.target.value);
  };
  const functionMesa = e => {
    setMesa(e.target.value);
  };
  const addOrder = (name, mesa, product, date, estado, total) =>
    firebase
      .firestore()
      .collection('order')
      .add({
        name,
        mesa,
        product,
        date,
        estado,
        total,
      });
  const validateOrder = () => {
    return products.length > 0 && name.length > 0 && mesa.length > 0;
  };

  const disableSubmitButton = !validateOrder();

  return (
    <div className="Order">
      <h2>PEDIDO</h2>
      <p>
        {new Date().getHours()}:{new Date().getMinutes()}:{new Date().getSeconds()}
      </p>
      <div>
        <label>
          Cliente: <input placeholder="Nombre" value={name} onChange={functionName} />
        </label>
        <br />
        <label>
          N° Mesa: <input placeholder="N° de Mesa" value={mesa} onChange={functionMesa} />
        </label>
      </div>

      {/* <p>DETALLE DE PEDIDO</p> */}
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
            <td>ELIMINAR</td>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>
                <input
                  type="number"
                  min="1"
                  max="100"
                  defaultValue={product.cantidad}
                  onClick={e => {
                    const p = e.target.value;
                    cantidad(product.id, p);
                  }}
                />
              </td>
              <td>{product.nombre}</td>
              <td>
                S/.
                {product.precio}
              </td>
              <td>
                S/.
                {product.precio * product.cantidad}
              </td>
              <td>
                <i
                  className="fa fa-minus-circle"
                  aria-hidden="true"
                  onClick={() => {
                    deleteRow(product);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="Total">
        Total = S/.
        {total()}
      </p>
      <button
        className="Send"
        onClick={() => {
          if (!disableSubmitButton) {
            addOrder(name, mesa, products, new Date(), 'pendiente', total());
            order([]);
            setName('');
            setMesa('');
          }
        }}
        disabled={disableSubmitButton}
      >
        {' '}
        Enviar
      </button>
    </div>
  );
};
