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




//On définit un composant ProductItem qui affiche les détails d'un produit sous forme de carte.
//Il prend plusieurs props (id, mainImage, name, price) et les utilise pour afficher les détails du produit.


//Il y a un Link qui pointe vers la page de détails du produit (/product/${props.id}). Ce lien va être relié à la route définie dans App.jsx (Donc à ProductDetail.jsx).  
//Ce lien est limité à la Card.Img, ce qui signifie que l'utilisateur doit cliquer sur l'image pour accéder à la page de détails du produit.
//Ajoute le composant ProductItemForm au corps de la carte. 
//Ce composant reçoit plusieurs props (id, image, name, price) qui sont utilisées pour afficher les détails du produit et gérer l'interaction de l'utilisateur avec le produit.

