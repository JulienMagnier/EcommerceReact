import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import { CartContext } from '../Context/Context';






function Cart(props) {
	const { cart } = useContext(CartContext);
	const { dispatch } = useContext(CartContext);
	const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);
	console.log(cart);
	return (
		<>
        <Modal
		className='modal'
		show={true}
		onHide={props.handleClose}
		backdrop="static"
		keyboard={false}
		>
		<Modal.Header closeButton>
		<Modal.Title>Your Cart</Modal.Title>
		</Modal.Header>
		<Modal.Body>
		<Table striped hover>
			<thead>
				<tr>
				<th>Ref</th>
				<th>Name</th>
				<th>Price(€)</th>
				<th>Amount</th>
				<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{cart.map((item,index) => (
				<tr key={index}>
					<td>{item.id}</td>
					<td>{item.name}</td>
					<td>{item.price}</td>
					<td>{item.quantity}</td>
					<td>
					<button onClick={() => dispatch({ type: 'REMOVE_ITEM', id: item.id })}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24">
						<path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
						</svg>
					</button>
					</td>
				</tr>
				))}
			</tbody>
    	</Table>
		<Modal.Title>Total : {totalCost} €</Modal.Title>
		</Modal.Body>
		<Modal.Footer>
		<Button variant="secondary" onClick={props.handleClose}>
			Close
		</Button>
		<Button variant="primary" onClick={() => dispatch({ type: 'CLEAR_CART' })}>Order</Button>
		</Modal.Footer>
		</Modal>

		
		</>
	);
}

export default Cart