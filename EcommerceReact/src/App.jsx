
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './Components/Layout/Header'
import Product from './Components/Product/Product'
import {CartProvider} from './Components/Context/ContextProvider';

function App() {

  return (
   
    <CartProvider>
      <Header />
      <Product />
    </CartProvider>
  )
}

export default App
