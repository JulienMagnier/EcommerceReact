
import Card from 'react-bootstrap/Card';
import ProductItemForm from './ProductItemForm';

function ProductItem(props) {
  return (
    <Card style={{ width: '500px', height:'640px',padding:'0px', marginBottom:'100px'}}>
      <Card.Img variant="top" src={props.mainImage} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
          <ProductItemForm image={props.mainImage} name={props.name} price={props.price}/>
      </Card.Body>
    </Card>
  );
}

export default ProductItem;