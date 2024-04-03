function ScoreSection ({score}) {


return (
    <section className="scores">
<figure className='scoring'>
   <h2 className="titreScore">Votre score    </h2>
   <div className="nombreScore"> {score} / 6 </div>
   <h3 className='bravo'>  <img className="gif"src="https://media1.giphy.com/media/1BURfsUHbv4eQ/giphy.gif?cid=6c09b952bcva09gstau9hb40pijeurgz8i5wevavncqslsa5&ep=v1_gifs_search&rid=giphy.gif&ct=s"></img>Félicitations<img className="gif"src="https://media1.giphy.com/media/1BURfsUHbv4eQ/giphy.gif?cid=6c09b952bcva09gstau9hb40pijeurgz8i5wevavncqslsa5&ep=v1_gifs_search&rid=giphy.gif&ct=s"></img> <br/> Vous avez gagné une  <br/>✨&lang; div &rang;✨ </h3>
  </figure>
  </section>
)

}

export default ScoreSection