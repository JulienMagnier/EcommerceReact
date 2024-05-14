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
