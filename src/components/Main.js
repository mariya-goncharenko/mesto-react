import React from "react";
import { api } from "../utils/Api";


function Main(props) {
    //Для информации о пользователе:
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');

    //Для информации о карточках:
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
    //Api для информации о пользователе:
       api.getUserInfo().then((response) => {
        setUserName(response.name);
        setUserDescription(response.about);
        setUserAvatar(response.avatar);
      });

    //Api для информации о карточках:
      api.getInitialCards().then((response) => {
        setCards(response);
      });
    }, [])

    return (
        <>
            <main>
                {/*Информация о пользователе*/}
                <section className="profile">
                    <div className="profile__avatar-container">
                    <button className="profile__edit-avatar" type="button" aria-label="Изменить аватар" onClick={props.onEditAvatar}></button> 
                    <img className="profile__avatar" src={userAvatar} alt="Ваша фотография"/>
                    </div>    

                    <div className="profile__info">
                        <h1 className="profile__name">{userName}</h1>
                        <p className="profile__job">{userDescription}</p>
                        <button className="profile__edit-profile" type="button" aria-label="Изменить данные профиля" onClick={props.onEditProfile}></button>
                    </div>

                    <button className="profile__add-button" type="button" aria-label="Добавить карточку" onClick={props.onAddPlace}></button>
                </section>

                {/*<!Карточки с фотографиями*/}
                <section className="elements">
                {cards.map((card) => (
                    <div className="element" key={card._id}>
                        <button className="element__delete-card" id="element__delete-card" type="button" aria-label="Удалить"></button>
                        <img className="element__img" src={card.link} alt={card.name}/>
                        <div className="element__info">
                            <h2 className="element__title">{card.name}</h2>
                            <div className="element__like-container">
                                <button className="element__like-photo" type="button" aria-label="Нравится"></button>
                                <p className="element__like-number">{card.likes.length}</p>    
                            </div>
                    
                        </div>
                    </div>
                ))}

                </section>

                {/*Template для карточки с фотографиями
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
                </template> */}
                    
            </main>
        </>
    
    );
  }

export default Main;