import React, { useContext, useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Cart from '../Cart/Cart';



function HeaderCartButton() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	
	return (
		<>
		<Button variant="primary" onClick={handleShow}>Your Cart
        <Badge bg="secondary">0</Badge>
        </Button>
		{show &&<Cart handleClose={handleClose} />}
		</>
	);
}

export default HeaderCartButton