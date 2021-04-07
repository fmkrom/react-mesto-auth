import '../index.css';

import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory} from 'react-router-dom';

import FrontPage from './FrontPage/FrontPage.js';
import Footer from "./Footer.js";

import Login from "./LogIn/Login.js";
import Register from "./Register/Register";

import ProtectedRoute from './ProtectedRoute/ProtectedRoute.js';

import * as authorization from '../utils/authorization.js';

function App(){

  const history = useHistory();

  const [userEmail, setUserEmail] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    handleTokenCheck()
  }, [])

  useEffect(() => {
    if (loggedIn) {
      history.push("/mesto");
    }
  }, [loggedIn])

  function handleRegister(email, password){
      authorization.userRegister(email, password)
      .then((res) => {
        if (!res || res.statusCode === 400) throw new Error('Ошибка регистрации');
        console.log(res);
        return res;
      }).catch((err)=>{console.log(err)})
  }

  function handleLogin(email, password){
      authorization.userLogin(email, password)
      .then((res)=>{
        if (!res || res.statusCode === 400) throw new Error('Неверные имя пользователя или пароль');
        //console.log('This is login result token:', res.token);
        if (res.token){
          localStorage.setItem('jwt', res.token)
          history.push('/mesto');
          return
        }
      }).catch((err)=>{console.log(err)});
  }

  function handleTokenCheck(){
    if (localStorage.getItem('jwt')){
      let currentToken = localStorage.getItem('jwt');
      authorization.checkToken(currentToken)
      .then((userEmail)=>{
          setLoggedIn(true)
          setUserEmail(userEmail);
      })
    }
  }

  return (
    <div className="body">
      <div className="page">
           <Switch>
              
              <ProtectedRoute
                component={FrontPage}
                path="/mesto"
                loggedIn={loggedIn}
              />

              <Route path="/login">
                <Login 
                  onLoginUser={handleLogin}
                />
              </Route>

              <Route path="/register">
                <Register 
                  onRegisterUser={handleRegister}
                />
              </Route>    

           </Switch>  

           <Footer />

      </div>
    </div>
  );
}

export default App;

/*
const handleLogin = ({ username, password }) => {
    return duckAuth.authorize(username, password)
      .then((data) => {
        if (!data) throw new Error('Неверные имя пользователя или пароль')
        if (data.jwt) {
          setLoggedIn(true)
          localStorage.setItem('jwt', data.jwt)
          history.push('/ducks')
          return;
        }
      })
  }

  const handleRegister = ({ username, password, email }) => {
    console.log({ username, password, email })
    return duckAuth.register({ username, password, email }).then((res) => {
      if (!res || res.statusCode === 400) throw new Error('Что-то пошло не так');
      return res;
    }).catch()
  }

  const tokenCheck = () => {
    if (localStorage.getItem('jwt')) {
      let jwt = localStorage.getItem('jwt');
      duckAuth.getContent(jwt).then(({ username, email }) => {
        if (username) {
          setLoggedIn(true)
          setUserData({ username, email })
        }
      });
    }
  }
*/