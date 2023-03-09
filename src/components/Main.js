import React from "react";
import { api } from "../utils/Api";
import Card from "./Card";

function Main({ onCardClick, onEditAvatar, onEditProfile, onAddPlace }) {
  //Для информации о пользователе:
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");

  //Для информации о карточках:
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userInfo, initialCards]) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const cardElements = cards.map((card) => (
    <Card key={card._id} card={card} onCardClick={onCardClick} />
  ));

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
              src={userAvatar}
              alt="Ваша фотография"
            />
          </div>

          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__job">{userDescription}</p>
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

        {/*<!Карточки с фотографиями*/}
        <section className="elements">{cardElements}</section>
      </main>
    </>
  );
}

export default Main;
