import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Products } from '../components/Products';
import { AddOrder } from '../components/AddOrder';
import { Header } from '../components/Header';
// import { GetOrders } from "../components/GetOrders";
import '../css/App.css';

export const Waiter = () => {
  const [selectProduct, setOrder] = useState([]);

  const incrementar = (prodId, cant) => {
    const arrNew = selectProduct.map((element) => {
      if (prodId === element.id) {
        return {
          ...element,
          cantidad: cant,
        };
      }
      return element;
    });
    setOrder(arrNew);
  };
  const Total = () => {
    let acum = 0;
    selectProduct.map((p) => acum += p.precio * p.cantidad);
    return acum;
  };

  return (
    <div>
      <Header />
      <button type="button" className="btn-nav"><Link to="/chef"> Estados de pedidos </Link></button>
      <main>
        <section className="Flex">
          <Products addProductAtOrder={(product) => {
            const found = selectProduct.find((p) => {
              return p.id === product.id;
            });

            if (found !== undefined) {
              const newArr = selectProduct.map((prod) => {
                if (found.id === prod.id) {
                  prod.disable = true;
                }
                return prod;
              });
              setOrder(newArr);
            } else {
              setOrder([...selectProduct, { ...product, cantidad: 1 }]);
            }
          }}
          />
          <AddOrder
            order={setOrder}
            products={selectProduct}
            cantidad={incrementar}
            total={Total}
            deleteRow={(element) => {
              const newArray = selectProduct.filter((ele) => {
                return element.id !== ele.id;
              });
              setOrder(newArray);
            }}
          />
        </section>
      </main>
    </div>
  );
};