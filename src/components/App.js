import React from "react";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/Api";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState("");
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState("");
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState("");
  const [selectedCard, setSelectedCard] = React.useState(null);

  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((userData) => {setCurrentUser(userData)})
      .catch((err) => {console.log(err)})

    api.getInitialCards()
      .then((cardData) => {
        setCards(
          cardData.map((card) => ({
            _id: card._id,
            name: card.name,
            link: card.link,
            likes: card.likes,
            owner: card.owner,
          }))
        )
      })
      .catch((err) => console.log(err))
  }, [])

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    if (!isLiked) {
        api.addLike(card._id, true).then((newCard) => {
            setCards((state) => state.map((c) => c._id === newCard._id ? newCard : c));
        });
    } 
    else {
        api.deleteLike(card._id).then((newCard) => {
            setCards((state) => state.map((c) => c._id === newCard._id ? newCard : c));
        });
    }
}

function handleCardDelete(card) {
  api
    .deleteCardMetod(card._id)
    .then(() => {
      setCards((cards) => cards.filter((c) => c._id !== card._id));
    })
    .catch((err) => console.log(err));
}

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
        cards={cards}
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
      />
      <Footer />

      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
      

      <PopupWithForm name="delete" title="Вы уверены?" onClose={closeAllPopups}>
        <button
          className="popup__button-save popup__button-save_type_close"
          type="submit"
        >
          Да
        </button>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  </CurrentUserContext.Provider>
    
  );
}

export default App;
