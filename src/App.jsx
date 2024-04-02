import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const questions = [{
    numéro : 1, 
    intitulé : "Pendant leurs cours, les professeurs d’économie parlent souvent du “pouvoir...", 
    a : "A. Des chats",
    b : "B. D'Aïcha",
    c : "C. Des geishas",
    d : "D. D'achat",  /* bonne réponse*/
    prix : ""
  },

  {
    numéro : 2, 
    intitulé : " Quel est le petit du lapin ?", 
    a : "A. Lapereau",
    b : "B. Lapineau",
    c : "C. Lapereau",  /*bonne réponse*/ 
    d : "D. Lapineau", 
    prix : ""
  },
  {
    numéro : 3, 
    intitulé : "Quel est le premier producteur mondial de bananes ?", 
    a : "A. La Chine",
    b : "B. La Tanzanie",
    c : "C. Le Brésil",
    d: "D. L'inde",
    prix : ""
  },
  {
    numéro : 4, 
    intitulé : "Laquelle de ces chansons n'est pas interprétée par Madonna ?", 
    a : "A. Vogue",
    b : "B. True Blue",
    c : "C. Holiday",
    d : "D. Purple Rain", /*bonne réponse*/ 
    prix : ""

  },

  {
    numéro : 5, 
    intitulé : "Quel célèbre couturier a dessiné la couverture du petit Larousse ?", 
    a : "A. Yves Saint Laurent",
    b : "B. Christian Lacroix", /*bonne réponse */ 
    c : "C. Karl Lagerfield",
    d : "D. Jean-Paul Gaultier",
    prix : ""

  },
  {
    numéro : 6, 
    intitulé : "Qu'est-ce que la climacophobie ? La peur incontrôlable ", 
    a : "A. Des fôrets",
    b : "B. De la boue",
    c : "C. Des escaliers", /*bonne réponse*/ 
    d: "D. De l'encre",
    prix : ""

  }
]

  return (
    <>
     
    </>
  )
}

export default App
