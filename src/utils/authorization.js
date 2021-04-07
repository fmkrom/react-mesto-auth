const basicUrl = 'https://auth.nomoreparties.co';

const checkResponse = (res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.statusText}`);

export function userRegister(email, password){  
  return fetch(`${basicUrl}/signup`,{
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({password, email})
  }).then(checkResponse);
};

export function userLogin(email, password){
  return fetch(`${basicUrl}/signin`,{
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({password, email})
  }).then(checkResponse);
};

export function checkToken(token){
  return fetch(`${basicUrl}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
  .then(checkResponse)
}

/*==================================================================================*/

/*
const basicUrl = 'https://auth.nomoreparties.co';

function getRes(res){
  if (res.ok) {
    console.log(res.json());
    return res.json();
  } else {
    return Promise.reject(`Authorization failed: ${res.status}`);
  }
}

export function userRegister(email, password){
  return fetch(`${basicUrl}/signup`,{
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({password, email})
  }).then((res) => {
    const resJson = res.json();
    console.log(resJson);
    
    getRes(res)
  }).catch((err) => console.log('Registration failed:', err));
};

export function userLogin(email, password){
  return fetch(`${basicUrl}/signin`,{
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({password, email})
  }).then((res) => {
    console.log('This is function userLogin responce:', res);
    getRes(res)
  }).then((data) => console.log(data)
  ).catch((err) => console.log('Login failed:', err));
};

export function getToken(token){
  return fetch(`${basicUrl}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
  .then(getRes)
}



/*==================================================================================*/

//body: JSON.stringify({email: registerEmail, password: registerPassword})

/*
body: JSON.stringify({
      email: userEmail,
      password: userPassword,
})

getRes(res){
  if (res.ok) {
    //console.log(`Запрос обработан успешно: ${res}`);
    return res.json();
  } else {
    return Promise.reject(`Ошибка получения данных с сервера: ${res.status}`);
  }
};*/

/*
Оригинал функции перед редактированием:

export default function userRegister(email, password){
  //console.log('api userRegister works!');
  //console.log('User data in userRegister', email, password);
  
  return fetch(`${basicUrl}/signup`,{
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({password, email})
  }).then((res) => {
    console.log('This is primary result: ', res) 
    try {
      if (res.status === 201){
        console.log(res);
        return res.json();
      }
    } catch(e){
      return (e)
    }
  }).then((res) => res.ok ? res.json() : Promise.reject(`Ошибка регистрации: ${res.status}`)
  ).catch((err) => console.log('Данные не отправились на сервер:', err));
};

*/

/*==================================================================================*/

//body: JSON.stringify({email: registerEmail, password: registerPassword})

/*
body: JSON.stringify({
      email: userEmail,
      password: userPassword,
})

getRes(res){
  if (res.ok) {
    //console.log(`Запрос обработан успешно: ${res}`);
    return res.json();
  } else {
    return Promise.reject(`Ошибка получения данных с сервера: ${res.status}`);
  }
};*/

/*
Оригинал функции перед редактированием:

export default function userRegister(email, password){
  //console.log('api userRegister works!');
  //console.log('User data in userRegister', email, password);
  
  return fetch(`${basicUrl}/signup`,{
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({password, email})
  }).then((res) => {
    console.log('This is primary result: ', res) 
    try {
      if (res.status === 201){
        console.log(res);
        return res.json();
      }
    } catch(e){
      return (e)
    }
  }).then((res) => res.ok ? res.json() : Promise.reject(`Ошибка регистрации: ${res.status}`)
  ).catch((err) => console.log('Данные не отправились на сервер:', err));
};

*/
