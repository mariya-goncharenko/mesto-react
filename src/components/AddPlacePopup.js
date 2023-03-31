import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose}) {

    return (
        <PopupWithForm
        name="add-card"
        title="Новое место"
        isOpen={isOpen}
        onClose={onClose}
      >
        <div className="popup__label">
          <input
            className="popup__input  popup__input_type_img"
            type="text"
            name="imgInput"
            id="imgInput"
            required
            minLength="2"
            maxLength="30"
            placeholder="Название места"
          />
          <span className="imgInput-error error"></span>
        </div>
        <div className="popup__label">
          <input
            className="popup__input  popup__input_type_link"
            type="url"
            name="linkInput"
            id="linkInput"
            required
            placeholder="Ссылка на изображение"
          />
          <span className="linkInput-error error"></span>
        </div>
        <button
          className="popup__button-save popup__button-save_disabled"
          type="submit"
        >
          Создать
        </button>
      </PopupWithForm>
    )
}

export default AddPlacePopup;