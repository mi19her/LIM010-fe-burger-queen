import React from "react";
const { useState } = React;

export const Order = ({ products, cantidad, deleteRow })=>{
    const [name, setname] = useState(' ');
    const functionName = (e)=>{
      setname(e.target.value);
      console.log(e.target.value);
    }
    return(
        <div>
         <input placeholder="Nombre" value={name} onChange={functionName}></input>
         <input placeholder="N° de Mesa"></input>
          <p>Lista de Pedidos</p>
          <table>
          <thead>
              <tr>
                 <td>Cantidad</td>
                 <td>Nombre</td>
                 <td>PU</td>
                 <td>SubTotal</td>
              </tr>
          </thead>
          <tbody>
             {products.map(product => (
            <tr key={product.id}>
              <td><input type="number" defaultValue={product.cantidad} onClick={(e) => {
              const p = e.target.value;
              cantidad(product.id, p)
              // console.log(p * product.precio)
              }}/></td>
              <td>{product.nombre}</td>
              <td>{product.precio}</td>
              <td>{product.precio*product.cantidad}</td>
              <td><input type="image" alt="eliminar" src="https://img.icons8.com/windows/64/000000/xbox-x.png"
              onClick={() => { deleteRow(product)}}/>
              </td>
            </tr>
        ))}
    </tbody>
          </table>
          <p>Total = </p>
          <button>enviar</button>
        </div>
    )
}


