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




//Le composant Product utilise le Hook useState pour gérer trois états : 
//pics (la liste des produits). La liste est vide lors de son état initial. 
//isLoading (un booléen indiquant si les données sont en cours de chargement). La valeur initiale est true.
//Et httpError (une chaîne qui contient un message d'erreur si une erreur se produit lors de la récupération des données). 

//Le Hook useEffect permet d'exécuter des effets de bord dans les composants fonctionnels donc ici, une requête HTTP pour récupérer les données des produits.
//Le tableau vide [] passé en deuxième argument signifie que cet effet sera exécuté une seule fois.

//Si la requête est réussie 
//setIsLoading(false) = false signifie que les données ont été récupérées et que le chargement est terminé.
//setPics(response.data.products) est appelé pour mettre à jour l'état pics avec les produits reçus de l'API.
//Sinon si la requête échoue, on catch l'erreur
//setIsLoading(false) = false signifie que le chargement est terminé.
//setHttpError(error.message) est appelé pour mettre à jour l'état httpError avec le message d'erreur.

//Si isLoading est true, on affiche un Spinner pour indiquer que les données sont en cours de chargement.

//Si httpError est défini, on affiche un message d'erreur avec le message d'erreur.

//Le code crée une grille de composants ProductItem, où chaque ProductItem représente un produit dans le tableau pics.
//La fonction map() est appelée sur le tableau pics. Elle prend une fonction comme argument et exécute cette fonction pour chaque élément du tableau.
//Pour chaque pic dans le tableau pics, elle renvoie un élément <Col> contenant un élément <ProductItem>.
//Ce composant Col a une clé unique (pic._id), ce qui est important en React pour aider à identifier quel élément doit être mis à jour lors d'un changement d'état ou de props.
//Il contient un composant ProductItem qui reçoit pic._id, pic.name, pic.price, et pic.mainImage comme props.