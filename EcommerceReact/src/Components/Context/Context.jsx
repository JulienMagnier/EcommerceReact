import { createContext } from "react";

export const CartContext = createContext();



//La méthode createContext() crée un objet de contexte.
//Utile pour passer des données qui peuvent être considérées comme "globales" à travers l'arborescence des composants sans passer par les props.
//On va l'utiliser pour s'occuper de l'éttat du panier.
//On peut utiliser CartContext.Provider pour fournir une valeur à CartContext.
//On peut utiliser le Hook useContext pour accéder à la valeur fournie par CartContext.Provider.