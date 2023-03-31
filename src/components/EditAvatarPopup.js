import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose}) {

    return (
        <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        isOpen={isOpen}
        onClose={onClose}
      >
        <div className="popup__label">
          <input
            className="popup__input  popup__input_type_avatar"
            type="url"
            name="AvatarInput"
            id="AvatarInput"
            required
            placeholder="Ссылка на новый аватар"
          />
          <span className="AvatarInput-error error"></span>
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

export default EditAvatarPopup;