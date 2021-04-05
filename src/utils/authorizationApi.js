class authorizationApi {
    constructor(settings){
        this._url = settings.url;
    }

    getRes(res){
        if (res.ok) {
          console.log(`Запрос обработан успешно: ${res}, ${res.status}`);
          return res.json();
        } else {
          return Promise.reject(`Ошибка получения данных: ${res.status}`);
        }
    }
  
    userRegister(email, password){
      return fetch(`${this._url}/signup`,{
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({password, email})
      }).then(this.getRes);
    };

    userLogin(email, password){
      return fetch(`${this._url}/signin`,{
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({password, email})
      }).then(this.getRes);
    };

};

const authorizationApiSettings = {
  url: "https://auth.nomoreparties.co",
};

const currentAuthorizationApi = new authorizationApi (authorizationApiSettings);

export default currentAuthorizationApi;