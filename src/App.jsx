import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardQuestion from './components/CardQuestion'
import Compteur from './components/Compteur'



function App() {

  const questions = [{
    numéro : 1, 
    intitulé : "Q1. Pendant leurs cours, les professeurs d’économie parlent souvent du “pouvoir...", 
    a : "A. Des chats",
    b : "B. D'Aïcha",
    c : "C. Des geishas",
    d : "D. D'achat",  /* bonne réponse*/
    prix : "",
    br:"D. D'achat"
  },

  {
    numéro : 2, 
    intitulé : "Q2. Quel est le petit du lapin ?", 
    a : "A. Lapinou",
    b : "B. Lapineau",
    c : "C. Lapereau",  /*bonne réponse*/ 
    d : "D. Lapineau", 
    prix : "",
    br : "C. Lapereau"
  },
  {
    numéro : 3, 
    intitulé : "Q3. Quel est le premier producteur mondial de bananes ?", 
    a : "A. La Chine",
    b : "B. La Tanzanie",
    c : "C. Le Brésil",
    d: "D. L'Inde", /*bonne réponse*/
    prix : "",
    br :"D. L'Inde"
  },
  {
    numéro : 4, 
    intitulé : "Q4. Laquelle de ces chansons n'est pas interprétée par Madonna ?", 
    a : "A. Purple Rain",
    b : "B. True Blue",
    c : "C. Holiday",
    d : "D. Vogue", /*bonne réponse*/ 
    prix : "",
    br : "A. Purple Rain"
  },

  {
    numéro : 5, 
    intitulé : "Q5. Quel célèbre couturier a dessiné la couverture du petit Larousse ?", 
    a : "A. Yves Saint Laurent",
    b : "B. Christian Lacroix", /*bonne réponse */ 
    c : "C. Karl Lagerfield",
    d : "D. Jean-Paul Gaultier",
    prix : "",
    br: "B. Christian Lacroix"

  },
  {
    numéro : 6, 
    intitulé : "Q6. Qu'est-ce que la climacophobie ? La peur incontrôlable ... ", 
    a : "A. Des fôrets",
    b : "B. De la boue",
    c : "C. Des escaliers", /*bonne réponse*/ 
    d : "D. De l'encre",
    prix : "",
    br: "C. Des escaliers"

  }
]
const [questionIndex, setQuestionIndex] = useState(0)
const passageQuestion = (index) => setQuestionIndex(index)
console.log(setQuestionIndex)

const suivant = () => {setQuestionIndex((prevIndex) => (prevIndex + 1));           
};

const [active, setActive] = useState(false)


    const [countCalcul1, setCalcul1] = useState(0);
    const [countCalcul2, setCalcul2] = useState(0);
    const fct = (event) => {
        let selection = event.target.innerHTML.split('')[0];
        const id = event.target.id.split('_')[1];
        selection == questions[questionIndex].br ? setCalcul1(countCalcul1 + 1) : setCalcul2(countCalcul2 + 0);
    }


  
    



  return (
    <>
    
   <h1>Qui veut gagner ... des trucs ? </h1>
   <div className='sectionssite'>
   <section className='quizz'>
   <CardQuestion question={questions[questionIndex]} questions={questions} fct={fct} passageQuestion={passageQuestion} active={active} setActive={setActive}>

   </CardQuestion>
   <button className="boutonSuivant"onClick={() => {suivant();{setActive(!active)}}} disabled={questionIndex >= questions.length -1 ? "true" : "" }>Suivant</button>
   </section>

   
   <section className='score'>
 
   <figure className='scoring'>
   <h2>Votre score    </h2>
   <div className="nombreScore"> {countCalcul1}</div>
   <h3 className='bravo'> Félicitations ! <br/> Vous avez gagné une ✨ div ✨ </h3>
  </figure></section>


   </div>
   </>
    
  )
}


export default App

