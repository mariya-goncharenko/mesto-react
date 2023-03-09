const Card = ({ card }) => (
    <div className="element" key={card._id}>
        <button className="element__delete-card" id="element__delete-card" type="button" aria-label="Удалить"></button>
        <img className="element__img" src={card.link} alt={card.name}/>
        <div className="element__info">
            <h2 className="element__title">{card.name}</h2>
            <div className="element__like-container">
                <button className="element__like-photo" type="button" aria-label="Нравится"></button>
                <p className="element__like-number">{card.likes.length}</p>    
            </div>
        </div>
    </div>
  );
  
  export default Card;