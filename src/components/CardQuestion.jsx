 import { useState } from 'react'

function CardQuestion ({question, active, reponseQuizz,}) {
    

const defaultColor = "#6D0FF2";
const trueColor= "rgb(0, 255, 0)";
const fauxColor= "rgb(120, 10, 8)";

return (

<>
<figure><h2>{question.intitulé}</h2>
 <h4>Choisissez une réponse : </h4>

<div className='boutonsReponses'>

<button id="b_1" style={{backgroundColor: active  === true &&  question.a===question.br ? trueColor : defaultColor}} 
  onClick={() => {reponseQuizz(question.a)}}> {question.a}</button>

<button id="b_2" style={{backgroundColor: active  === true &&  question.b===question.br ? trueColor : defaultColor}} 
onClick={() => {reponseQuizz(question.b)}}> {question.b}</button>

<button id="b_3" style={{backgroundColor: active  === true &&  question.c===question.br ? trueColor : defaultColor}}
 onClick={() =>{reponseQuizz(question.c)}}>{question.c}</button>

<button id="b_4" style={{backgroundColor: active  === true &&  question.d===question.br ? trueColor : defaultColor}}
 onClick={() =>{reponseQuizz(question.d)}}>{question.d}</button> 
</div>

</figure>


</>
        

    )
}

export default CardQuestion