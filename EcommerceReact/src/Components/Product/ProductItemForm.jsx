import { useState, useContext } from 'react';
import { CartContext } from '../Context/Context';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductItemForm({ id, name, price}) {
  const [quantity, setQuantity] = useState(0);
  const { dispatch } = useContext(CartContext);

  const handleAddToCart = () => {
    console.log(id, name, price, quantity);
    dispatch({ type: 'ADD_ITEM', item: { id, name, price, quantity } });
    setQuantity(0);
  };

  return (
    <div>
      <Card.Text>{price} €</Card.Text>
      <div className="boutonadd">
        <Form.Control type="number" min="0" placeholder="0" value={quantity} onChange={e => setQuantity(Number(e.target.value))}/>
        <Button variant="primary" onClick={handleAddToCart}>Add</Button>
      </div>
    </div>
  );
}

export default ProductItemForm;