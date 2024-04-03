
import { useState } from 'react'


function CardQuestion() {

    const [countQuestions, setQuestion] = useState(0);
    const [countCalcul1, setCalcul1] = useState(0);
    const [countCalcul2, setCalcul2] = useState(0);
    /*const [countCalcul3, setCalcul3] = useState(0);
    const [countCalcul4, setCalcul4] = useState(0);
    const [countCalcul5, setCalcul5] = useState(0);
    const [countCalcul6, setCalcul6] = useState(0);
*/

    const questions = [{
        numéro: 1,
        intitulé: "Pendant leurs cours, les professeurs d’économie parlent souvent du pouvoir...",
        a: "A. Des chats",
        b: "B. D'Aïcha",
        c: "C. Des geishas",
        d: "D. D'achat",  /* bonne réponse*/
        prix: "",
        br: "D"
    },

    {
        numéro: 2,
        intitulé: " Quel est le petit du lapin ?",
        a: "A. Lapereau",
        b: "B. Lapineau",
        c: "C. Lapereau",  /*bonne réponse*/
        d: "D. Lapineau",
        prix: "",
        br: "C"
    },
    {
        numéro: 3,
        intitulé: "Quel est le premier producteur mondial de bananes ?",
        a: "A. La Chine",
        b: "B. La Tanzanie",
        c: "C. Le Brésil",
        d: "D. L'inde", //bonne réponse
        prix: "",
        br: "D"
    },
    {
        numéro: 4,
        intitulé: "Laquelle de ces chansons n'est pas interprétée par Madonna ?",
        a: "A. Vogue",
        b: "B. True Blue",
        c: "C. Holiday",
        d: "D. Purple Rain", /*bonne réponse*/
        prix: "",
        br: "D"

    },

    {
        numéro: 5,
        intitulé: "Quel célèbre couturier a dessiné la couverture du petit Larousse ?",
        a: "A. Yves Saint Laurent",
        b: "B. Christian Lacroix", /*bonne réponse */
        c: "C. Karl Lagerfield",
        d: "D. Jean-Paul Gaultier",
        prix: "",
        br: "B",

    },
    {
        numéro: 6,
        intitulé: "Qu'est-ce que la climacophobie ? La peur incontrôlable ",
        a: "A. Des fôrets",
        b: "B. De la boue",
        c: "C. Des escaliers", /*bonne réponse*/
        d: "D. De l'encre",
        prix: "",
        br: "C",

    }

    ]
    const fct = (event) => {
    
        let selection = event.target.innerHTML.split('')[0];
        const id = event.target.id.split('_')[1];
        for (let i = 1; i < 5; i++) {
            i != id ?
                document.getElementById(`b_${i}`).style.backgroundColor = "white" :
                document.getElementById(`b_${i}`).style.backgroundColor = "#00FF00"
        }
      
        selection == questions[countQuestions].br ? setCalcul1(countCalcul1 + 1) : setCalcul2(countCalcul2 + 0);
        
    }

    const next = (e) => {
        countQuestions < 5 ?
            setQuestion(countQuestions + 1) :
            alert(`${countCalcul1}`);
        for (let i = 0; i < 4; i++) {
            document.getElementsByClassName('button')[i].style.backgroundColor = "white";
        }
        
    }


    return (
        <>
            <section>
                <h1>{questions[countQuestions].intitulé}</h1>
                <div className='block_reponse'>
                    <ul className='ul'>
                        <li><button className='button' onClick={fct} id="b_1">{questions[countQuestions].a}</button></li>
                        <li><button className='button' onClick={fct} id="b_2">{questions[countQuestions].b}</button></li>
                        <li><button className='button' onClick={fct} id="b_3">{questions[countQuestions].c}</button></li>
                        <li><button className='button' onClick={fct} id="b_4">{questions[countQuestions].d}</button></li>
                    </ul>
                    <button onClick={next} id="valider">valider</button>
                </div>
            </section>
        </>
    );
}
export default CardQuestion;