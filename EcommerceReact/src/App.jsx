import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './Components/Layout/Header'
import Product from './Components/Product/Product'
import {CartProvider} from './Components/Context/ContextProvider';
import ProductDetail from './Components/Product/ProductDetail';


function App() {

  return (
    <BrowserRouter>
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail/>} />
      </Routes>
    </CartProvider>
    </BrowserRouter>
  )
}

export default App



//On importe les composants nécessaires à la création de notre application et les bibliothèques.
//BrowserRouter active les fonctionnalités de routage pour l'application.
//Routes est un composant qui permet de définir les routes de l'application.
//Route est un composant qui permet de définir une route.
//CartProvider est un composant qui permet de fournir le contexte du panier à ses enfants. 
//Il y a une route pour la page d'accueil et une route pour la page de détail du produit (différent selon son id).