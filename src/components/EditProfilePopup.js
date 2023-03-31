import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({isOpen, onClose}) {

    return (
        <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        isOpen={isOpen}
        onClose={onClose}
      >
        <div className="popup__label">
          <input
            className="popup__input  popup__input_type_name"
            type="text"
            name="nameInput"
            id="nameInput"
            minLength="2"
            maxLength="40"
            required
            placeholder="Имя"
          />
          <span className="nameInput-error error"></span>
        </div>
        <div className="popup__label">
          <input
            className="popup__input  popup__input_type_job"
            type="text"
            name="jobInput"
            id="jobInput"
            minLength="2"
            maxLength="200"
            required
            placeholder="О себе"
          />
          <span className="jobInput-error error"></span>
        </div>
        <button
          className="popup__button-save popup__button-save_disabled"
          type="submit"
        >
          Сохранить
        </button>
      </PopupWithForm>
    )
}

export default EditProfilePopup;