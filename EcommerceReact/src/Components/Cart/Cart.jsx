import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';




function Cart(props) {

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
				<tr>
				<td>Image de notre chien</td>
				<td>Chien</td>
				<td>100</td>
				<td>1</td>
				</tr>
				<tr>
				<td>Image de notre chat</td>
				<td>Chat</td>
				<td>200</td>
				<td>1</td>
				</tr>
				<tr>
				<td>Image de notre aigle</td>
				<td>Aigle</td>
				<td>1000</td>
				<td>1</td>
				</tr>
				<tr>
				<td>Image de notre limace</td>
				<td>Limace</td>
				<td>10</td>
				<td>1</td>
				</tr>
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