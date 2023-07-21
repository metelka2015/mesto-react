export default class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
    this._authorization = options.headers.authorization; //токен
  }

  _checkRes(res) {
    if (res.ok) {
      return res.json();
    }

    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        authorization: this._authorization,
      },
    }).then(this._checkRes);
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: this._authorization,
      },
    }).then(this._checkRes);
  }

  setProfileInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(this._checkRes);
  }

  addNewCard(data) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(this._checkRes);
  }

  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: "DELETE",
      headers: {
        authorization: this._authorization,
      },
    }).then(this._checkRes);
  }

  addLike(id) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: "PUT",
      headers: {
        authorization: this._authorization,
      },
    }).then(this._checkRes);
  }

  removeLike(id) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: "DELETE",
      headers: {
        authorization: this._authorization,
      },
    }).then(this._checkRes);
  }

  editNewAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then(this._checkRes);
  }
}

export const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-68",
  headers: {
    authorization: "13586674-c353-49e6-be07-3fb91b47b641",
  },
});