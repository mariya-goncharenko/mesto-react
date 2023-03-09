function Card(props){
    function handleClick() {
        props.onCardClick(props.card);
      }

    return (
    <div className="element" key={props.card._id}>
        <button className="element__delete-card" id="element__delete-card" type="button" aria-label="Удалить"></button>
        <img className="element__img" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
        <div className="element__info">
            <h2 className="element__title">{props.card.name}</h2>
            <div className="element__like-container">
                <button className="element__like-photo" type="button" aria-label="Нравится"></button>
                <p className="element__like-number">{props.card.likes.length}</p>    
            </div>
        </div>
    </div>);
}

  export default Card;