import React, { useReducer } from 'react';
import {CartContext} from './Context';

const initialState = [];

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      console.log("test", action.item.id)
      console.log("test 2", state)
      const itemIndex = state.findIndex(item => item.id === action.item.id)

      if (itemIndex >= 0) {
        console.log('itemIndex :', itemIndex);
        // L'article existe déjà dans le panier, mettez à jour sa quantité
        const newState = [...state];
        newState[itemIndex].quantity += action.item.quantity;
        return newState;
      } else {
        // L'article n'existe pas dans le panier, ajoutez-le
        return [...state, action.item];
      }

    case 'REMOVE_ITEM':
      console.log(action.id)
      return state.filter(item => item.id !== action.id);

    case 'CLEAR_CART':
      return [];
    
    default:
      return state;

  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}




//Ce code définit un fournisseur de contexte pour un panier d'achat dans une application React. Il utilise le Hook useReducer pour gérer l'état du panier.
//initialState est défini comme un tableau vide, ce qui signifie que le panier est vide au départ.
//cartReducer est une fonction qui prend l'état actuel du panier et une action, et renvoie le nouvel état du panier en fonction du type d'action. Il gère quatre types d'actions :

//ADD_ITEM : ajoute un article au panier. Si l'article existe déjà dans le panier, sa quantité est mise à jour. Sinon, l'article est ajouté au panier.
//Il le fait en cherchant l'index de l'article dans le panier qui a le même id que action.item.id.
//findIndex() est appelée sur le tableau state. Pour chaque item dans le tableau state, elle vérifie si item.id est égal à action.item.id. 
//Si c'est le cas, elle crée une copie de l'état actuel du panier, augmente la quantité de l'article dans la copie de l'état, et renvoie la copie de l'état comme nouvel état du panier.
//Si aucun item ne satisfait cette condition, elle renvoie un nouvel état du panier qui contient tous les articles actuels + l'article à ajouter.
//[...state] décompose chaque élément du tableau state et les insère dans un tableau. 

//REMOVE_ITEM : supprime un article du panier en filtrant les articles par leur identifiant.
//La méthode filter() crée un nouveau tableau avec tous les éléments qui passent un test (fourni en tant que fonction).
//pour chaque item dans le tableau state, elle vérifie si item.id est différent de action.id. 
//Si c'est le cas, item est inclus dans le nouveau tableau. Si ce n'est pas le cas, item est exclu du nouveau tableau.
//Elle renvoie le nouveau tableau qui contient tous les articles sauf celui avec l'identifiant action.id.

//CLEAR_CART : vide le panier en renvoyant un tableau vide.
//Elle renvoie un tableau vide, ce qui signifie que le panier est vide.

//default : renvoie l'état actuel du panier si l'action n'est pas reconnue.

//CartProvider est un composant qui utilise le Hook useReducer pour gérer l'état du panier. Il fournit le contexte du panier à ses enfants en utilisant CartContext.Provider.
//Il utilise children qui est une prop spéciale de React qui qui fait référence aux composants enfants qui sont passés à CartProvider comme contenu.
//useReducer est un Hook de React qui est utilisé pour gérer l'état complexe dans une application React. Il est une alternative à useState. 
//Il prend un réducteur (cartReducer) et un état initial (initialState) comme arguments, et renvoie l'état actuel (cart) et une fonction dispatch (dispatch).
//CartContext.Provider prend une valeur qui est l'objet { cart, dispatch }
//Ce qui signifie que tous les composants enfants peuvent accéder à l'état du panier (cart) et à la fonction dispatch (dispatch).