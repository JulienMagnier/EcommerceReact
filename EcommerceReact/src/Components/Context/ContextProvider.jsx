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

    default:
      return state;

    case 'CLEAR_CART':
      return [];
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

