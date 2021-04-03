
export const basicUrl = 'https://auth.nomoreparties.co';

export function userRegister(registerEmail, registerPassword){
  return fetch(`${basicUrl}/signup`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email: registerEmail, password: registerPassword})
  })
  .then((response) => {
    try {
      if (response.status === 200){
        console.log(response);
        return response.json();
      }
    } catch(e){
      return (e)
    }
  })
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
  .catch((err) => console.log(err));
};