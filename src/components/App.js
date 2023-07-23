import React from 'react';
import {Header} from './Header.js';
import {Main} from './Main.js';
import {Footer} from './Footer.js';
import { PopupWithForm } from './PopupWithForm.js';
import {ImagePopup} from './ImagePopup.js';


function App() { 

  const [isEditAvatarOpen, setIsEditAvatarOpen] = React.useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = React.useState(false);
  const [isAddPlaceOpen, setIsAddPlaceOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

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

  return (    
         <div className="page">
            <Header />
            <Main 
             onEditProfile = {handleEditProfileClick}
             onAddPlace = {handleAddPlaceClick}
             onEditAvatar = {handleEditAvatarClick}
             onCardClick = {handleCardClick}
            />
            <Footer />
            <PopupWithForm name="profile" title="Редактировать профиль" textButton="Сохранить" isOpen={isEditProfileOpen} onClose={closeAllPopups}>
                    <label className="popup__label">
                      <input id="name" className="popup__input popup__input_type_name" name="name" placeholder="Имя"/>
                      <span id="error-name" className="popup__error-message"></span>
                    </label>
                    <label className="popup__label">
                      <input id="job" className="popup__input popup__input_type_job" name="about" placeholder="О себе"/>
                      <span id="error-job" className="popup__error-message"></span>
                    </label>                                                
            </PopupWithForm>
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
  );
}

export default App;
