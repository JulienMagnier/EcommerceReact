import React, { useContext, useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Cart from '../Cart/Cart';
import { CartContext } from '../Context/Context';




function HeaderCartButton(props) {
	const [show, setShow] = useState(false);
	const { cart } = useContext(CartContext);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
	return (
		<>
		<Button variant="primary" onClick={handleShow}>Your Cart 
        <Badge id="badgepanier" bg="secondary">{totalItems}</Badge>
        </Button>
		{show &&<Cart handleClose={handleClose} />}
		</>
	);
}

export default HeaderCartButton



//Notre code pour le bouton "Your Cart"
//Le Hook useState est utilisé pour gérer l'état de l'affichage du panier. Il prend un argument, false, qui est la valeur initiale de l'état.
//Le Hook useContext est utilisé pour accéder au contexte du panier.
//handleClose et handleShow sont des fonctions qui gèrent l'ouverture et la fermeture de la fenêtre du panier.
//totalItems calcule le nombre total d'articles dans le panier.

//La fonction reduce() prend deux arguments : un accumulateur, un élément. Elle permet de réduire le tableau à une seule valeur.
//total est l'accumulateur qui stocke le coût total du panier.
//item est l'élément du tableau, la valeur courante.
//Pour chaque item dans le cart, elle ajoute item.quantity à total. Le deuxième argument est la valeur initiale de l'accumulateur, qui est 0 dans ce cas.

//onClick={handleShow} est un gestionnaire d'événements qui est déclenché lorsque l'utilisateur clique sur le bouton. Lorsque le bouton est cliqué, la fonction handleShow est appelée.
//On affiche le nombre d'item de notre panier avec le badge et le {totalItems}.
//Si show est true, alors <Cart handleClose={handleClose} /> rend le composant Cart. 
//handleClose est une référence de fonction qui est passée en tant que prop à Cart. Cette fonction est utilisée pour changer la valeur de show à false.