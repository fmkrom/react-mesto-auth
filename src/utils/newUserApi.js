const basicUrl = 'https://auth.nomoreparties.co';

function getRes(res){
  if (res.ok) {
    console.log(res)
    return res.json();
  } else {
    return Promise.reject(`Authorization failed: ${res.status}`);
  }
}

export default function getRegisteredUser(){
  return fetch(`${basicUrl}//users/me`,{
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZiMmFiZTU0NjkwNjAwMTk5NWEwNjkiLCJpYXQiOjE2MTc2OTY2NzB9.3kaTV4qMNumUneDEIofhM6hQcr83zbEZ7skRuJmAq74}`
    },
    body: JSON.stringify()
  }).then((res) => {
    console.log('This is function getRegisteredUser responce:', res);
    getRes(res)
  }).catch((err) => console.log('getRegisteredUser failed:', err));
};

getRegisteredUser()