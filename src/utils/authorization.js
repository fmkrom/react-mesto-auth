const basicUrl = 'https://auth.nomoreparties.co';

function getRes(res){
  if (res.ok) {
    console.log(res)
    return res.json();
  } else {
    return Promise.reject(`Authorization failed: ${res.status}`);
  }
}

export default function userRegister(email, password){
  return fetch(`${basicUrl}/signup`,{
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({password, email})
  }).then((res) => {
    console.log('This is function userRegister responce:', res);
    getRes(res)
  }).catch((err) => console.log('Registration failed:', err));
};







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
