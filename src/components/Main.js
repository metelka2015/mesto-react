import React from 'react';
import {api} from '../utils/Api.js';

export function Main({onEditAvatar, onEditProfile, onAddPlace}) { 
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();

    React.useEffect(() => {
        api.getUserInfo()
            .then((res) => {
                setUserAvatar(res.avatar);
                setUserName(res.name);
                setUserDescription(res.about);
            })
            .catch((error) => console.log(error))
    });
    


    return (
        <main className="content">
            <section className="profile">
            <div className="profile__container">
                <div className="profile__avatar-container">
                <div className="profile__update-avatar" onClick = {onEditAvatar}></div>
                <img src={userAvatar} alt="фотография в профиле" className="profile__avatar" name="avatar"/>
                </div>
                <div className="profile__info">
                <div className="profile__title-container">
                    <h1 className="profile__title">{userName}</h1>
                    <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick = {onEditProfile}></button>
                </div>
                <p className="profile__subtitle">{userDescription}</p>
                </div>
            </div>
            <button className="profile__add-button profile__add-button-link" type="button" aria-label="Добавить" onClick = {onAddPlace}></button>
            </section>
            <section className="elements" aria-label="Фотографии мест">
            <ul className="elements__list"></ul>
            </section>
            
        </main>
    );
}