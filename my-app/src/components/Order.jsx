import React from "react";
const { useState } = React;

export const Order = ({ productos })=>{
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
                 <td>Precio</td>
              </tr>
          </thead>
          <tbody>
              {productos.map((p) => (
                <tr key={p.id}>
                 <td>{p.cantidad}</td>
                 <td>{p.nombre}</td>
                 <td>{p.precio}</td>
                 <td><input type="image" alt="eliminar" src="https://img.icons8.com/windows/64/000000/xbox-x.png">
                   </input></td>
                </tr>
              ))}
          </tbody>
          </table>
          <button>ENVIAR</button>
        </div>
    )
}

