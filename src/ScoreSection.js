function ScoreSection ({score}) {


return (
<figure className='scoring'>
   <h2>Votre score    </h2>
   <div className="nombreScore"> {score}</div>
   <h3 className='bravo'> Félicitations ! <br/> Vous avez gagné une ✨ div ✨ </h3>
  </figure>
)

}