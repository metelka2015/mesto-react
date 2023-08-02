import React from 'react';
import { Header } from './Header.js';
import { Main } from './Main.js';
import { Footer } from './Footer.js';
import { PopupWithForm } from './PopupWithForm.js';
import { ImagePopup } from './ImagePopup.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { api } from '../utils/Api.js';
import { EditProfilePopup } from './EditProfilePopup.js';


function App() { 

  const [isEditAvatarOpen, setIsEditAvatarOpen] = React.useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = React.useState(false);
  const [isAddPlaceOpen, setIsAddPlaceOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const [currentUser, setCurrentUser] = React.useState("");  
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {          
    api.getInitialCards()
        .then((res) => {
          setCards(res);
        })
        .catch(console.error);
}, []);
  
  React.useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch(console.error);
  }, [])

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
      setIsEditAvatarOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfileOpen(true);
  }    

  function handleAddPlaceClick() {
    setIsAddPlaceOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarOpen(false);
    setIsEditProfileOpen(false);
    setIsAddPlaceOpen(false);
    setSelectedCard(null);
  }
  
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
      })
      .catch(console.error);
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id)); 
        closeAllPopups();
      })
      .catch(console.error);
  }

  function handleUpdateUser(data) {
    api.setUserInfo(data)
    .then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    })
    .catch(console.error);
  }
  

  return ( 
    <CurrentUserContext.Provider value={currentUser}> 
         <div className="page">            
            <Header />
            <Main 
             onEditProfile = {handleEditProfileClick}
             onAddPlace = {handleAddPlaceClick}
             onEditAvatar = {handleEditAvatarClick}
             onCardClick = {handleCardClick}
             onCardLike = {handleCardLike}
             onCardDelete = {handleCardDelete}
             cards = {cards}
            />
            <Footer />
            <EditProfilePopup isOpen={isEditProfileOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
            <PopupWithForm name="place" title="Новое место" textButton="Создать" isOpen={isAddPlaceOpen} onClose={closeAllPopups}>            
                  <label className="popup__label">
                    <input id="placename" className="popup__input popup__input_type_placename" name="placename" placeholder="Название" />
                    <span id="error-placename" className="popup__error-message"></span>
                  </label>
                  <label className="popup__label">
                    <input id="placelink" type="url" className="popup__input popup__input_type_placelink" name="placelink" placeholder="Ссылка на картинку" />
                    <span id="error-placelink" className="popup__error-message"></span>
                  </label>                  
            </PopupWithForm>  
            <PopupWithForm name="delete" title="Вы уверены?" textButton="Да" onClose={closeAllPopups}/>  
            <PopupWithForm name="avatar" title="Обновить аватар" textButton="Сохранить" isOpen={isEditAvatarOpen} onClose={closeAllPopups}> 
                    <label className="popup__label">
                      <input id="avatarlink" type="url" className="popup__input popup__input_type_placelink" name="avatar" placeholder="Ссылка на картинку" />
                      <span id="error-avatarlink" className="popup__error-message"></span>
                    </label>
            </PopupWithForm>   
            <ImagePopup card={selectedCard} onClose={closeAllPopups} />       
      </div>  
    </CurrentUserContext.Provider>      
  );
}

export default App;
