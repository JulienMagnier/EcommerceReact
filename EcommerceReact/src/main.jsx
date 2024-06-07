import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)



//On importe les différents modules. ReactDOM est utilisé pour gérer l'arbre de composants React
//On importe aussi le fichier CSS pour le rendu de la page 
//ReactDOM.createRoot(document.getElementById('root')).render(<App />) : Crée un conteneur racine dans l'élément DOM avec l'ID root et y rend le composant App. 
//C'est ici que votre application React est attachée à votre page HTML. L'élément avec l'ID root est généralement un div vide dans votre fichier index.html.