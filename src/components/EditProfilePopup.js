import React from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState(currentUser.name || "");
  const [about, setAbout] = React.useState(currentUser.about || "");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleAboutChange(event) {
    setAbout(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: name,
      about: about,
    });
  }

  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
          value={name}
          onChange={handleNameChange}
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
          value={about}
          onChange={handleAboutChange}
        />
        <span className="jobInput-error error"></span>
      </div>
      <button
        className={`popup__button-save ${
          name && about ? "" : "popup__button-save_disabled"
        }`}
        type="submit"
        disabled={!name || !about}
      >
        Сохранить
      </button>
    </PopupWithForm>
  );
}

export default EditProfilePopup;