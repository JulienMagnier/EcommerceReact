
import Card from 'react-bootstrap/Card';
import ProductItemForm from './ProductItemForm';
import { Link } from 'react-router-dom';

function ProductItem(props) {
  return (
    
    <Card style={{ width: '500px', height:'640px',padding:'0px', marginBottom:'100px'}}>

      <Link to={`/product/${props.id}`}>
        <Card.Img variant="top" src={props.mainImage} />
      </Link>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
          <ProductItemForm id={props.id} image={props.mainImage} name={props.name} price={props.price}/>
      </Card.Body>
    </Card>
  );
}

export default ProductItem;