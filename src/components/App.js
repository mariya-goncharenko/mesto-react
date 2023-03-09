import React from 'react';
import '../App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const[isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const[isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const[isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [cards, ] = React.useState([]);
  const[selectedCard, setSelectedCard]=React.useState(null);



  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen)
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }


  return (
  <div className="page">
    <Header/>
    <Main
      onEditAvatar={handleEditAvatarClick}
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onCardClick={handleCardClick} 
      cards={cards}
    />
    <Footer />

    <PopupWithForm name="edit-avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
                <div className="popup__label">
                    <input className="popup__input  popup__input_type_avatar" type="url" name="AvatarInput" id="AvatarInput" required placeholder="Ссылка на новый аватар"/>
                    <span className="AvatarInput-error error"></span>
                </div>
                <button className="popup__button-save popup__button-save_disabled" type="submit">Сохранить</button>
            </PopupWithForm>

            <PopupWithForm name="edit-profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
                <div className="popup__label">
                    <input  className="popup__input  popup__input_type_name" type="text" name="nameInput" id="nameInput" minLength="2" maxLength="40" required placeholder="Имя"/>
                    <span className="nameInput-error error"></span>
                </div>
                <div className="popup__label">
                    <input className="popup__input  popup__input_type_job" type="text" name="jobInput" id="jobInput" minLength="2" maxLength="200" required placeholder="О себе"/>
                    <span className="jobInput-error error"></span>
                </div> 
                <button className="popup__button-save popup__button-save_disabled" type="submit">Сохранить</button>
            </PopupWithForm>

            <PopupWithForm name="add-card" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                <div className="popup__label">
                    <input  className="popup__input  popup__input_type_img" type="text" name="imgInput" id="imgInput" required minLength="2" maxLength="30"  placeholder="Название места"/>
                    <span className="imgInput-error error"></span>    
                </div>
                <div className="popup__label">
                    <input className="popup__input  popup__input_type_link" type="url" name="linkInput" id="linkInput" required placeholder="Ссылка на изображение"/>
                    <span className="linkInput-error error"></span>
                </div>
                <button className="popup__button-save popup__button-save_disabled" type="submit">Создать</button>
            </PopupWithForm>

            <PopupWithForm name="delete" title="Вы уверены?"  onClose={closeAllPopups}>
                <button className="popup__button-save popup__button-save_type_close" type="submit">Да</button>
            </PopupWithForm>

            <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

  </div>
  );
}

export default App;