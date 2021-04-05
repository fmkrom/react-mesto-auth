const basicUrl = 'https://auth.nomoreparties.co';

function getRes(res){
  if (res.ok) {
    console.log(res)
    return res.json();
  } else {
    return Promise.reject(`Authorization failed: ${res.status}`);
  }
}

export default function userLogin(email, password){
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
  }).catch((err) => console.log('Login failed:', err));
};