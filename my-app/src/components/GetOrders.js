import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { OrderStructure } from '../components/OrderStructure';
import '../css/App.css';

export const GetOrders = () => {
	const [orders, setOrders] = useState([]);
	const [state, setState] = useState('pendiente')

	useEffect(() => {
		firebase
			.firestore()
			.collection('order')
			.where('estado', '==', state)
			.orderBy('date', 'asc')
			.onSnapshot((querySnapshot => {
				setOrders(querySnapshot.docs.map(snapOrder => ({ id: snapOrder.id, ...snapOrder.data() })));
			}))
	}, [state]);

	const Ready = id => {
		firebase
			.firestore()
			.collection('order')
			.doc(id)
			.update({
				estado: 'listo',
			});
	};
	const Delivered = id => {
		firebase
			.firestore()
			.collection('order')
			.doc(id)
			.update({
				estado: 'entregado',
			});
	};

	return (
    <div>
		<nav className="Nav">
			{/* <button className="Nav-btn" id=""><Link to="/"> Home </Link></button> */}
			<ul>
				<li className="Nav-btn" onClick={() => setState("pendiente")}>Pendientes</li>
				<li className="Nav-btn" onClick={() => setState("listo")}>Listos</li>
				<li className="Nav-btn" onClick={() => setState("entregado")}>Entregados</li>
			</ul>
      </nav>
			<OrderStructure nameButton={state === 'pendiente' ? 'Listo' : 'Entregado'} arr={orders} update={
				state === 'pendiente' ?
					Ready : Delivered} />
		</div>
		// <div>
		//   {/* <button className="Nav-btn" id=""><Link to="/"> Home </Link></button> */}
		//   <div className="Nav">
		//   <button className="Nav-btn" onClick={() => setState("pendiente")}>Pedidos pendientes</button>
		//   <button className="Nav-btn" onClick={() => setState("listo")}>Pedidos listos</button>
		//   <button className="Nav-btn" onClick={() => setState("entregado")}>Pedidos entregados</button>
		//   </div>
		//   <OrderStructure nameButton={state === 'pendiente'? 'Listo': 'Entregado'} arr={orders} update={
		//     state === 'pendiente'?
		//     Ready:Delivered} />
		// </div>
	)
};
