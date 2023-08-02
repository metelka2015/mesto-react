import React from 'react';
import { PopupWithForm } from './PopupWithForm.js';

export function AddPlacePopup({isOpen, onClose, onAddPlace}) {

    const [place, setPlace] = React.useState('');
    const [link, setLink] = React.useState('');
               
    function handleNameChange(e) {
        setPlace(e.target.value);
    }
    
    function handleLinkChange(e) {
        setLink(e.target.value);
    }  

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();

        // Передаём значения управляемых компонентов во внешний обработчик
        onAddPlace ({name: place, link});
    }
    return (
        <PopupWithForm name="place" title="Новое место" textButton="Создать" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>            
            <label className="popup__label">
            <input id="placename" value={place} onChange={handleNameChange} className="popup__input popup__input_type_placename" name="placename" placeholder="Название" />
            <span id="error-placename" className="popup__error-message"></span>
            </label>
            <label className="popup__label">
            <input id="placelink" value={link} onChange={handleLinkChange} type="url" className="popup__input popup__input_type_placelink" name="placelink" placeholder="Ссылка на картинку" />
            <span id="error-placelink" className="popup__error-message"></span>
            </label>                  
        </PopupWithForm> 
    )
}