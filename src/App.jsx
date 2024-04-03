
import { useState } from "react";
import "./App.css";
import CardQuestion from "./components/CardQuestion";
import ScoreSection from "./components/ScoreSection";

function App() {
  const questions = [
    {
      numéro: 1,
      intitulé:
        "Q1. Pendant leurs cours, les professeurs d’économie parlent souvent du “pouvoir...",
      a: "A. Des chats",
      b: "B. D'Aïcha",
      c: "C. Des geishas",
      d: "D. D'achat" /* bonne réponse*/,
      prix: "",
      br: "D. D'achat",
    },

    {
      numéro: 2,
      intitulé: "Q2. Quel est le petit du lapin ?",
      a: "A. Lapinou",
      b: "B. Lapineau",
      c: "C. Lapereau" /*bonne réponse*/,
      d: "D. Laperon",
      prix: "",
      br: "C. Lapereau",
    },
    {
      numéro: 3,
      intitulé: "Q3. Quel est le premier producteur mondial de shows ?",
      a: "A. La Chine",
      b: "B. La Tanzanie",
      c: "C. Le Brésil",
      d: "D. L'Inde" /*bonne réponse*/,
      prix: "",
      br: "D. L'Inde",
    },
    {
      numéro: 4,
      intitulé:
        "Q4. Laquelle de ces chansons n'est pas interprétée par Madonna ?",
      a: "A. Purple Rain",
      b: "B. True Blue",
      c: "C. Holiday",
      d: "D. Vogue" /*bonne réponse*/,
      prix: "",
      br: "A. Purple Rain",
    },

    {
      numéro: 5,
      intitulé:
        "Q5. Quel célèbre couturier a dessiné la couverture du petit Larousse ?",
      a: "A. Yves Saint Laurent",
      b: "B. Christian Lacroix" /*bonne réponse */,
      c: "C. Karl Lagerfield",
      d: "D. Jean-Paul Gaultier",
      prix: "",
      br: "B. Christian Lacroix",
    },
    {
      numéro: 6,
      intitulé:
        "Q6. Qu'est-ce que la climacophobie ? La peur incontrôlable ... ",
      a: "A. Des fôrets",
      b: "B. De la boue",
      c: "C. Des escaliers" /*bonne réponse*/,
      d: "D. De l'encre",
      prix: "",
      br: "C. Des escaliers",
    },
  ];

  /* Pour faire défiler les questions avec le boutons suivant */
  const [questionIndex, setQuestionIndex] = useState(0);
  const suivant = () => {
    setQuestionIndex((prevIndex) => prevIndex + 1);
    setActive(!active);
  };

  /*Pour changer la couleur et indiquer à l'utilistateur la bonne réponse */
  const [active, setActive] = useState(false);

  /* Pour calculer le score */
  const [score, setScore] = useState(0);
  const fct = (selectedAnswer) => {
    if (selectedAnswer == questions[questionIndex].br) {
      setScore(score + 1);
    }
  };

  /* Combinaison des deux fonctions */
  const reponseQuizz = (selectedAnswer) => {
    setActive(!active); 
    fct(selectedAnswer); 
  };

  /*Afficher les résultats*/
  const [show, setShow] = useState(false);
   
  return (
    <>
   
      <h1>Qui veut gagner ...  des trucs  ? </h1>

      <div className="sectionssite">
        <section className="quizz">
          <CardQuestion
            question={questions[questionIndex]}
            reponseQuizz={reponseQuizz}
            active={active}
          ></CardQuestion>

          <div className="buttonsFin">
            <button
              className="boutonSuivant"
              onClick={() => {
                suivant();
              }}
              disabled={questionIndex >= questions.length - 1 ? "true" : ""}
            >
              Suivant
            </button>

            <button className="showResults" onClick={() => setShow(!show)}
              disabled={questionIndex < questions.length - 1 ? "true" : ""}
            >
              Résultats{" "}
            </button>
          </div>
          </section>
          
         {show ? <ScoreSection score={score}>{score} </ScoreSection> : null}
          
       
      </div>
    </>
  );
}

export default App;
