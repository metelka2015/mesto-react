import React from 'react';
//import { api } from '../utils/Api.js';
import { Card } from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

export function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick, onCardLike, onCardDelete, cards}) { 
    /*const [userName, setUserName] = React.useState("");
    const [userDescription, setUserDescription] = React.useState("");
    const [userAvatar, setUserAvatar] = React.useState("");*/
    /*const [cards, setCards] = React.useState([]);*/

    const userInfo = React.useContext(CurrentUserContext);

    const cardsElements = cards.map((card) => (
        <Card 
            card = {card}
            key = {card._id}
            onCardClick = {onCardClick}
            onCardLike = {onCardLike}
            onCardDelete = { onCardDelete }
        />
    ));

    return (
        <main className="content">
            <section className="profile">
            <div className="profile__container">
                <div className="profile__avatar-container">
                <div className="profile__update-avatar" onClick = {onEditAvatar}></div>
                <img src={userInfo.avatar} alt="фотография в профиле" className="profile__avatar" name="avatar"/>
                </div>
                <div className="profile__info">
                <div className="profile__title-container">
                    <h1 className="profile__title">{userInfo.name}</h1>
                    <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick = {onEditProfile}></button>
                </div>
                <p className="profile__subtitle">{userInfo.about}</p>
                </div>
            </div>
            <button className="profile__add-button profile__add-button-link" type="button" aria-label="Добавить" onClick = {onAddPlace}></button>
            </section>
            <section className="elements" aria-label="Фотографии мест">
            <ul className="elements__list">{cardsElements}</ul>
            </section>
            
        </main>
    );
}