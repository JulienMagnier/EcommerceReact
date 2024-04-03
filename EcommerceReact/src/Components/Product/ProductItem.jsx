
import Card from 'react-bootstrap/Card';
import ProductItemForm from './ProductItemForm';

function ProductItem(props) {
  return (
    <Card style={{ width: '500px', height:'520px',padding:'0px', marginBottom:'25px'}}>
      <Card.Img variant="top" src="https://dummyimage.com/800x600/000/fff" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
          <ProductItemForm price={props.price}/>
      </Card.Body>
    </Card>
  );
}

export default ProductItem;