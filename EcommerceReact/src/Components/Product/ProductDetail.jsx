import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/product/${id}`)
      .then((response) => {
        setProduct(response.data.product);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setHttpError(error.message);
      });
  }, [id]);

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (httpError) {
    return (
      <div id="error">
        <h1>Oh snap! You got an error!</h1>
        <p>{httpError}</p>
        <a href="/">Go back to the main page</a>
      </div>
    );
  }

  return (
    <div id="descriptionprod">
      <h1>{product.name}</h1>
      <img src={product.mainImage} alt={product.name} />
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetail;