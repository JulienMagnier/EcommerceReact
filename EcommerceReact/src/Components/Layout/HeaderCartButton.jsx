import React, { useContext, useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Cart from '../Cart/Cart';
import { CartContext } from '../Context/Context';




function HeaderCartButton(props) {
	const [show, setShow] = useState(false);
	const { cart } = useContext(CartContext);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
	return (
		<>
		<Button variant="primary" onClick={handleShow}>Your Cart 
        <Badge id="badgepanier" bg="secondary">{totalItems}</Badge>
        </Button>
		{show &&<Cart handleClose={handleClose} />}
		</>
	);
}

export default HeaderCartButton