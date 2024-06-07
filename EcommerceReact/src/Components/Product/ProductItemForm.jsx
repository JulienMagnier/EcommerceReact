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
        <Form.Control type="number" min="0" placeholder="0" value={quantity} onChange={event => setQuantity(Number(event.target.value))}/>
        <Button variant="primary" onClick={handleAddToCart}>Add</Button>
      </div>
    </div>
  );
}

export default ProductItemForm;




//Le composant ProductItemForm prend plusieurs props (id, name, price) 
//Il utilise le Hook useState pour gérer l'état quantity (la quantité du produit à ajouter au panier). La valeur initiale de quantity est 0.
//Il utilise le Hook useContext pour accéder à dispatch du CartContext. dispatch est une fonction qui permet de mettre à jour l'état du panier. 

//La fonction handleAddToCart est définie. Cette fonction utilise dispatch pour ajouter l'item au panier.
//Elle va suivre l'action ADD_ITEM qui est définie dans le cartReducer du composant ContextProvider.
//Elle prend les valeurs de id, name, price et quantity et les passe à dispatch sous forme d'objet item.
//Et enfin réinitialise quantity à 0.

//<Card.Text>{price} €</Card.Text> : Affiche le prix du produit en euros. price est une prop passée au composant ProductItemForm.
//On crée un champ de saisie de type nombre avec une valeur minimale de 0. 
//La valeur de ce champ est liée à l'état de quantity, et chaque fois que l'utilisateur change la valeur du champ, l'état quantity est mis à jour avec la nouvelle valeur.
//IL y a une fonction fléchée qui est appelée à chaque fois que la valeur du champ change. Elle prend event comme argument et met à jour l'état quantity avec la nouvelle valeur.
//event.target.value est la nouvelle valeur du champ de saisie. event.target est l'élément qui a déclenché l'événement, et value est la valeur de cet élément.
//Number(event.target.value) convertit la valeur du champ en un nombre. Cela est nécessaire car la valeur du champ est une chaîne de caractères par défaut.
//On envoie tout ca dans la fonction setQuantity pour mettre à jour la valeur de quantity.
//onClick={handleAddToCart} est un gestionnaire d'événements qui est déclenché lorsque le bouton est cliqué. Lorsque cela se produit, la fonction handleAddToCart est appelée.

