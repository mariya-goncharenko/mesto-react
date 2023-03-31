import React from "react";
import PopupWithForm from "./PopupWithForm";


function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="popup__label">
        <input
          className="popup__input  popup__input_type_avatar"
          type="url"
          name="AvatarInput"
          id="AvatarInput"
          required
          placeholder="Ссылка на новый аватар"
          ref={avatarRef}
        />
        <span className="AvatarInput-error error"></span>
      </div>
      <button
        className={`popup__button-save ${
          avatarRef ? "" : "popup__button-save_disabled"
        }`}
        type="submit"
        disabled={!avatarRef}
      >
        Сохранить
      </button>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;