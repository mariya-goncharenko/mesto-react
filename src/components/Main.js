import React from "react";
import { api } from "../utils/Api";
import Card from "./Card";


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
                    <Card key={card._id} card={card} onCardClick={props.onCardClick} />
                  ))}
                </section>
            </main>
        </>
    
    );
  }

export default Main;