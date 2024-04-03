function ScoreSection ({score}) {


return (
    <section className="scores">
<figure className='scoring'>
   <h2>Votre score    </h2>
   <div className="nombreScore"> {score} / 6 </div>
   <h3 className='bravo'> Félicitations ! <br/> Vous avez gagné une  <br/>✨ div ✨ </h3>
  </figure>
  </section>
)

}

export default ScoreSection