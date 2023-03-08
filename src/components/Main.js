import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";


function Main() {

    function handleEditAvatarClick() {
        document.querySelector('.popup_type_edit-avatar').classList.add('popup_opened');
      }
    
      function handleEditProfileClick() {
        document.querySelector('.popup_type_edit-profile').classList.add('popup_opened');
      }
    
      function handleAddPlaceClick() {
        document.querySelector('.popup_type_add-card').classList.add('popup_opened');
      }

    return (
        <>
            <main>
                {/*Информация о пользователе*/}
                <section className="profile">
                    <div className="profile__avatar-container">
                    <button className="profile__edit-avatar" type="button" aria-label="Изменить аватар" onClick={handleEditAvatarClick}></button> 
                    <img className="profile__avatar" src="#" alt="Ваша фотография"/>
                    </div>    

                    <div className="profile__info">
                        <h1 className="profile__name"></h1>
                        <p className="profile__job"></p>
                        <button className="profile__edit-profile" type="button" aria-label="Изменить данные профиля" onClick={handleEditProfileClick}></button>
                    </div>

                    <button className="profile__add-button" type="button" aria-label="Добавить карточку" onClick={handleAddPlaceClick}></button>
                </section>

                {/*<!Карточки с фотографиями*/}
                <section className="elements"></section>

                {/*Template для карточки с фотографиями*/}
                <template className="element-template" id="element-template">
                    <div className="element">
                        <button className="element__delete-card" id="element__delete-card" type="button" aria-label="Удалить"></button>
                        <img className="element__img" src="#" alt="Фотографии мест, описаных в карточке"/>
                        <div className="element__info">
                            <h2 className="element__title"></h2>
                            <div className="element__like-container">
                            <button className="element__like-photo" type="button" aria-label="Нравится"></button>
                            <p className="element__like-number"></p>    
                            </div>
                            
                        </div>
                    </div>
                </template> 
                    
            </main>

            <PopupWithForm name="edit-avatar" title="Обновить аватар">
                <div className="popup__label">
                    <input className="popup__input  popup__input_type_avatar" type="url" name="AvatarInput" id="AvatarInput" required placeholder="Ссылка на новый аватар"/>
                    <span className="AvatarInput-error error"></span>
                </div>
                <button className="popup__button-save popup__button-save_disabled" type="submit">Сохранить</button>
            </PopupWithForm>

            <PopupWithForm name="edit-profile" title="Редактировать профиль">
                <div className="popup__label">
                    <input  className="popup__input  popup__input_type_name" type="text" name="nameInput" id="nameInput" minlength="2" maxlength="40" required placeholder="Имя"/>
                    <span className="nameInput-error error"></span>
                </div>
                <div className="popup__label">
                    <input className="popup__input  popup__input_type_job" type="text" name="jobInput" id="jobInput" minlength="2" maxlength="200" required placeholder="О себе"/>
                    <span className="jobInput-error error"></span>
                </div> 
                <button className="popup__button-save popup__button-save_disabled" type="submit">Сохранить</button>
            </PopupWithForm>

            <PopupWithForm name="add-card" title="Новое место">
                <div className="popup__label">
                    <input  className="popup__input  popup__input_type_img" type="text" name="imgInput" id="imgInput" required minlength="2" maxlength="30"  placeholder="Название места"/>
                    <span className="imgInput-error error"></span>    
                </div>
                <div className="popup__label">
                    <input className="popup__input  popup__input_type_link" type="url" name="linkInput" id="linkInput" required placeholder="Ссылка на изображение"/>
                    <span className="linkInput-error error"></span>
                </div>
                <button className="popup__button-save popup__button-save_disabled" type="submit">Создать</button>
            </PopupWithForm>

            <PopupWithForm name="delete" title="Вы уверены?">
                <button className="popup__button-save popup__button-save_type_close" type="submit">Да</button>
            </PopupWithForm>

            <ImagePopup />
        </>
    
    );
  }

export default Main;