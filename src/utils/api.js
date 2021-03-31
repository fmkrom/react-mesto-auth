class Api {
    constructor(settings){
        this._url = settings.url;
        this._cohort = settings.cohort;
        this._token = settings.token;
    }

    //Базовый метод получения результата запроса

    getRes(res){
        if (res.ok) {
          //console.log(`Запрос обработан успешно: ${res}`);
          return res.json();
        } else {
          return Promise.reject(`Ошибка получения данных с сервера: ${res.status}`);
        }
    };
    
    //Методы карточек

    //1. Получить данные карточек
    getCards(){
      return fetch(`${this._url}/${this._cohort}/cards`,
      {
       method: 'GET',
       headers: {
            authorization: this._token,
            'Content-Type': 'application/json'
          },
      }).then(this.getRes);
    };

    //2. Добавить карточку
    addCard(name, url){
      return fetch(`${this._url}/${this._cohort}/cards`,
        {
        method: 'POST',
        headers:{
            authorization: this._token,
            'Content-Type': 'application/json'
          }, 
          body:JSON.stringify({
              name: name,
              link: url
          })
        }
      ).then(this.getRes);
    };

     //Промежуточный метод: установить лайк-статус
      setCardLikeStatus(status){
          if (status === true){
            return 'PUT'
          } else {
            return 'DELETE'
          }
      }
  
      //Применение лайк-статуса к методу лайка карточки:
      toggleLikeCard(cardId, likeStatus){
        return fetch(`${this._url}/${this._cohort}/cards/likes/${cardId}`,
          {
            method: likeStatus ? "PUT" : "DELETE",
            headers:{
              authorization: this._token,
              'Content-Type': 'application/json'
            },
          }
        ).then(this.getRes);
      };
  
    //Удалить карточку
    deleteCard(cardId){
      return fetch(`${this._url}/${this._cohort}/cards/${cardId}`,
        {
          method: "DELETE",
          headers:{
            authorization: this._token,
            'Content-Type': 'application/json'
          }
        }
      ).then(this.getRes);
    };

    //Методы пользователя

    //Получить данные пользователя
    getUser(){
      return fetch(`${this._url}/${this._cohort}/users/me`,
        {
          method: 'GET',
          headers: {
            authorization: this._token
          }
        }
      ).then(this.getRes)
    };
    
    //Установить новые ДП
    setUser(data){
      return fetch(`${this._url}/${this._cohort}/users/me`,
        {
          method: 'PATCH',
          headers: {
            authorization: this._token,
            'Content-Type': 'application/json'
          }, 
          body: JSON.stringify({
            name: data.name,
            about: data.about
          })
      }).then(this.getRes)
    };

    //Редактировать аватар
    editAvatar(url){
      return fetch(`${this._url}/${this._cohort}/users/me/avatar`,
      {
        method: 'PATCH',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({
          avatar: url
        })
      }
      ).then(this.getRes)
    };
}

const apiSettings = {
  url: "https://mesto.nomoreparties.co/v1",
  cohort: "cohort-20",
  token: "d7e2da9f-ccdc-4136-a46f-5fb3950e2feb"
};    

const api = new Api (apiSettings);

export default api;


