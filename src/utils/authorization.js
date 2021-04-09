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