function ImagePopup() {
    return (
    <div className="popup popup_type_img">
        <figure className="popup__img-container">
            <button className="popup__close" type="button" aria-label="Закрыть"></button> 
            <img className="popup__img" src="#" alt="Фотографии мест, описаных в карточке"/>
            <figcaption className="popup__img-title"></figcaption>
        </figure>
    </div>
    );
  }

export default ImagePopup;