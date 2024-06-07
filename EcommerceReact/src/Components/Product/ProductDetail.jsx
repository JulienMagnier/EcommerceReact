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


//Le composant ProductDetail est un composant fonctionnel qui affiche les détails d'un produit. 

//Le composant ProductDetail utilise le Hook useState pour gérer trois états : 
//product (les détails du produit). La valeur initiale est null.
//isLoading (un booléen indiquant si les données sont en cours de chargement). La valeur initiale est true.
//Et httpError (une chaîne qui contient un message d'erreur si une erreur se produit lors de la récupération des données).
//Le Hook useParams est utilisé pour récupérer l'id du produit depuis l'URL.

//Le tableau [id] est le deuxième argument de useEffect. Il s'agit d'un tableau de dépendances. Lorsque l'une des dépendances change, useEffect exécute à nouveau la fonction.
//L'ID du produit est inclus dans l'URL de la requête (http://localhost:3000/api/product/${id}), ce qui permet à l'API de savoir quel produit renvoyer.

//Le reste c'est la même chose que pour le composant Product, sauf que nous affichons les détails du produit (nom, image, description) au lieu de la liste des produits.
//Le terme product fait référence à l'état product que vous avez défini dans votre composant ProductDetail avec le Hook useState
