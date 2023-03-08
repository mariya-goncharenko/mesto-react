function Main(props) {

    return (
        <>
            <main>
                {/*Информация о пользователе*/}
                <section className="profile">
                    <div className="profile__avatar-container">
                    <button className="profile__edit-avatar" type="button" aria-label="Изменить аватар" onClick={props.onEditAvatar}></button> 
                    <img className="profile__avatar" src="#" alt="Ваша фотография"/>
                    </div>    

                    <div className="profile__info">
                        <h1 className="profile__name"></h1>
                        <p className="profile__job"></p>
                        <button className="profile__edit-profile" type="button" aria-label="Изменить данные профиля" onClick={props.onEditProfile}></button>
                    </div>

                    <button className="profile__add-button" type="button" aria-label="Добавить карточку" onClick={props.onAddPlace}></button>
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
        </>
    
    );
  }

export default Main;