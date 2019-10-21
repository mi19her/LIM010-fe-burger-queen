import React from "react";
const { useState } = React;

export const Order = ({ productos })=>{
    const [name, setname] = useState(' ');
    const functionName = (e)=>{
      setname(e.target.value);
      console.log(e.target.value);
    }
    console.log(productos)
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
                 <td>Precio</td>
              </tr>
          </thead>
              {productos.map((p) => (
                <tbody>
                <tr key={p.id}>
                 <td><input type="number" value="1"/></td>
                 <td>{p.nombre}</td>
                 <td>{p.precio}</td>
                </tr>
                </tbody>
              ))}
          </table>
        </div>
    )
}

