import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './Components/Layout/Header'
import Product from './Components/Product/Product'

function App() {

  return (
    // Add an expression inside the parentheses
    <div>
      <Header />
      <Product />
    </div>
  )
}

export default App
