import React from "react";
import { useState, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const nameInputRef = useRef();
  const linkInputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: nameInputRef.current.value,
      link: linkInputRef.current.value,
    });
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
          ref={nameInputRef}
          value={name}
          onChange={handleNameChange}
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
          ref={linkInputRef}
          value={link}
          onChange={handleLinkChange}
        />
        <span className="linkInput-error error"></span>
      </div>
      <button
        className={`popup__button-save ${
          name && link ? "" : "popup__button-save_disabled"
        }`}
        type="submit"
        disabled={!name || !link}
      >
        Создать
      </button>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
