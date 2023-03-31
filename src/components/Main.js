import React from "react";
import { useContext, useState, useEffect } from "react";
import { api } from "../utils/Api";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardLike, onCardDelete , onCardClick}) {
  //Для информации о пользователе:
  const currentUser = useContext(CurrentUserContext);
  const { setCurrentUser } = useContext(CurrentUserContext);

  //Для информации о карточках:
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo()
      .then((userInfo) => {
        setCurrentUser(userInfo); 
      })
      .catch((err) => {
        console.log(err);
      });

    api.getInitialCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setCurrentUser]);

  const cardElements = cards.map((card) => (
    <Card
    card={card}
    key={card._id}
    onCardClick={onCardClick}
    onCardDelete={onCardDelete}
    onCardLike={onCardLike}
    />
  ))

  return (
    <>
      <main>
        {/*Информация о пользователе*/}
        <section className="profile">
          <div className="profile__avatar-container">
            <button
              className="profile__edit-avatar"
              type="button"
              aria-label="Изменить аватар"
              onClick={onEditAvatar}
            ></button>
            <img
              className="profile__avatar"
              src={currentUser.avatar}
              alt="Ваша фотография"
            />
          </div>

          <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <p className="profile__job">{currentUser.about}</p>
            <button
              className="profile__edit-profile"
              type="button"
              aria-label="Изменить данные профиля"
              onClick={onEditProfile}
            ></button>
          </div>

          <button
            className="profile__add-button"
            type="button"
            aria-label="Добавить карточку"
            onClick={onAddPlace}
          ></button>
        </section>

        {/*Карточки с фотографиями*/}
        <section className="elements">{cardElements}</section>
      </main>
    </>
  );
}

export default Main;
