import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import { CartContext } from '../Context/Context';




function Cart(props) {
	const { cart } = useContext(CartContext);
	console.log(cart);
	return (
		<>
        <Modal
		show={true}
		onHide={props.handleClose}
		backdrop="static"
		keyboard={false}
		>
		<Modal.Header closeButton>
		<Modal.Title>Panier</Modal.Title>
		</Modal.Header>
		<Modal.Body>
		<Table striped hover>
			<thead>
				<tr>
				<th>Ref</th>
				<th>Name</th>
				<th>Price(€)</th>
				<th>Amount</th>
				</tr>
			</thead>
			<tbody>
				{cart.map((item) => (
				<tr key={item._id}>
					<td>{item.id}</td>
					<td>{item.name}</td>
					<td>{item.price}</td>
					<td>{item.quantity}</td>
				</tr>
				))}
			</tbody>
    	</Table>
		<Modal.Title>Total :</Modal.Title>
		</Modal.Body>
		<Modal.Footer>
		<Button variant="secondary" onClick={props.handleClose}>
			Close
		</Button>
		<Button variant="primary">Order</Button>
		</Modal.Footer>
		</Modal>

		
		</>
	);
}

export default Cart