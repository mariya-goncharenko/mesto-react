function ImagePopup(props) {
    return (
    <div className={`popup popup_type_img ${props.card ? 'popup_opened' : ''}`}>
        <figure className="popup__img-container">
            <button className="popup__close" type="button" aria-label="Закрыть" onClick={props.onClose}></button> 
            <img className="popup__img" src={props.card ? props.card.link : ''} alt={props.card ? props.card.name : ''}/>
            <figcaption className="popup__img-title">{props.card ? props.card.name : ''}</figcaption>
        </figure>
    </div>
    );
  }

export default ImagePopup;