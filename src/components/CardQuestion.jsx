 import { useState } from 'react'

function CardQuestion ({question, fct, passageQuestion, questions, questionIndex , active, setActive, onAnswerClick}) {
    

const defaultColor = "#6D0FF2";
const trueColor= "rgb(0, 255, 0)";
const fauxColor= "rgb(120, 10, 8)";
const bonnereponse = question.bonnereponse


return (

<>
<figure><h2>{question.intitulé}</h2>
 <h4>Choisissez une réponse : </h4>

<div className='boutonsReponses'>

<button style={{backgroundColor: active  === true &&  question.a===question.br ? trueColor : defaultColor}} 
onClick={() =>{fct (); {setActive(!active)}}}>{question.a} </button>

<button style={{backgroundColor: active  === true &&  question.b===question.br ? trueColor : defaultColor}} onClick={() =>{setActive(!active); fct ()}}>{question.b}</button>

<button style={{backgroundColor: active  === true &&  question.c===question.br ? trueColor : defaultColor}} onClick={() =>{ fct (); setActive(!active); fct ()}}>{question.c}</button>

<button style={{backgroundColor: active  === true &&  question.d===question.br ? trueColor : defaultColor}} onClick={() =>{fct (); setActive(!active); fct ()}}>{question.d}</button> 
</div>

</figure>


</>
        

    )
}

export default CardQuestion