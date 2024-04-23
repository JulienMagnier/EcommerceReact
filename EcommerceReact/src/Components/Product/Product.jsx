import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductItem from './ProductItem';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function Product() {
  const [pics, setPics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/product')
      .then((response) => {
        setIsLoading(false);
        setPics(response.data.products);
      })
      .catch((error) => {
        setIsLoading(false);
        setHttpError(error.message);
        console.error('Error fetching data: ', error);
      });
  }, []);

  if (isLoading) {
    return (
      <Button variant="primary" disabled>
        <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true"/> Loading ...
          <span className="visually-hidden">Loading...</span>
      </Button>
        )
  }

  if (httpError) {
    return (
      <div style={{textAlign: "center"}}> 
        <h1>Oh snap! You got an error! See u later!</h1>
        <h2>{httpError}</h2>
      </div>
    )
  }

  return (
    <Container fluid id="containerproduct">
      
        <Row>
        {pics.map((pic) => (
          <Col xs={12} md={6} key={pic._id} >
            <ProductItem id={pic._id} name={pic.name} price={pic.price} mainImage={pic.mainImage}/>
          </Col>
        
      ))}
      </Row>
    </Container>
  );
}

export default Product;