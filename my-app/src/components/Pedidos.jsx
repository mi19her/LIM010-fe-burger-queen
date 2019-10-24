import React from 'react'

export const Pedidos = ({products, deleteItem}) => {
  return (
    <tbody>
             {products.map(product => (
            <tr key={product.id}>
              <td><input type="number" defaultValue={product.cantidad} onClick={(e) => {
            //   const p = e.target.value;
            //   cantidad(product.id, p)
            //   console.log(p * product.precio)
              }}/></td>
              <td>{product.nombre}</td>
              <td>{product.precio}</td>
              <td>{product.precio*product.cantidad}</td>
              <td><input type="image" alt="eliminar" src="https://img.icons8.com/windows/64/000000/xbox-x.png"
              onClick={() => { deleteItem(product.id)}}/>
                   </td>
            </tr>
        ))}
    </tbody>

  )
}