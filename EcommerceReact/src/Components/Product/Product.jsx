import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductItem from './ProductItem';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Product() {
  const [pics, setPics] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos?_limit=6')
      .then((response) => {
        setPics(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <Container fluid id="containerproduct">
      <Row>
        <Col><ProductItem name="Product 1" price="1230"/></Col>
        <Col><ProductItem name="Product 2" price="1240"/></Col>
      </Row>
      <Row>
        <Col><ProductItem name="Product 3" price="1250"/></Col>
        <Col><ProductItem name="Product 4" price="1260"/></Col>
      </Row>
      <Row>
        <Col><ProductItem name="Product 5" price="1270"/></Col>
        <Col><ProductItem name="Product 6" price="1280"/></Col>
      </Row>
    </Container>
    
  );
}

export default Product;