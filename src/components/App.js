import '../index.css';

import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory, } from 'react-router-dom';

import Header from './Header';
import Footer from "./Footer";

import Login from "./Login";
import Register from "./Register";

import Main from "./Main.js";

import ProtectedRoute from './ProtectedRoute';

import * as authorization from '../utils/authorization';

import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";

import api from "../utils/api.js";

import CurrentUserContext from "../contexts/CurrentUserContext.js";

function App(){

  const [currentUser, setCurrentUser] = useState({});
  const [currentCards, setCurrentCards] = useState([]);
  
  const [isPopupEditProfileOpen, handleEditProfileClick] = useState(false);
  const [isPopupAddPlaceOpen, handleAddPlaceClick] = useState(false);
  const [isPopupEditAvatarOpen, handleEditAvatarClick] = useState(false);
  
  const [isPopupWithImageOpen, handleCardImageClick]  = useState(false);
  const [selectedCard, setSelectedCard] = useState({url:"", name:""});

  const [isPopupRegistrationSuccessfulOpen, setPopupRegistrationSuccessfulOpen] = useState(false);
  const [isPopupRegistrationFailedOpen, setPopupRegistrationFailedOpen] = useState(false);

  const history = useHistory();

  useEffect(()=>{
    Promise.all([
      api.getCards(),  
      api.getUser()
    ])
    .then(([cardsData, userData]) =>{
       setCurrentCards(cardsData);
       setCurrentUser(userData);
    }).catch(err => console.log(err));
  }, []);

  function hanldeCardClick(cardUrl, cardName){
    setSelectedCard({url: cardUrl, name: cardName});
    handleCardImageClick(true);
  }

  function handleLikeCard(card){
    const isLiked = card.likes.some((item)=> item._id === currentUser._id);
    
    api.toggleLikeCard(card.id, !isLiked)
    .then((newCardData)=>{
      setCurrentCards(((state)=> state.map((c) => c._id === card.id ? newCardData : c)))
    })  
  }

  function handleDeleteCard(data){
    api.deleteCard(data.id)
    .then(()=>{
      const cardsAfterDelete = currentCards.filter(card => !(card._id === data.id));
      setCurrentCards(cardsAfterDelete);
    }).catch(err => console.log(err));
  }

  function closeAllPopups(){
    handleEditProfileClick(false);
    handleAddPlaceClick(false);
    handleEditAvatarClick(false);
    handleCardImageClick(false);
    setPopupRegistrationSuccessfulOpen(false);
    setPopupRegistrationFailedOpen(false);
  }

  function handleAddPlaceSubmit(name, link){
      api.addCard(name, link)
      .then((newCard)=>{
        setCurrentCards([newCard, ...currentCards])
      }).catch(err => console.log(err))
      closeAllPopups();
  }

  function handleUpdateUser(data){
      api.setUser(data)
      .then((newUserData)=>{
        setCurrentUser(newUserData)
      }).catch(err => console.log(err))
      closeAllPopups();
  };

  function handleUpdateAvatar(data){
    api.editAvatar(data.avatar)
    .then((newAvatarData)=>{
        setCurrentUser(newAvatarData)
    }).catch(err => console.log(err))
    closeAllPopups();
  }

  const [currentUserEmail, setCurrentUserEmail] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    handleTokenCheck()
  }, [])

  useEffect(() => {
    if (loggedIn) {
      history.push("/main");
    }
  }, [loggedIn, history])

  function handleRegister(email, password){
      authorization.userRegister(email, password)
      .then((res) => {
        setPopupRegistrationSuccessfulOpen(true);
        return res;
      }).catch((err)=>{
        console.log('Ошибка при регистрации: ', err)
        setPopupRegistrationFailedOpen(true);
      })
  }

  function handleLogin(email, password){
      authorization.userLogin(email, password)
      .then((res)=>{
        if (!res || res.statusCode === 400) throw new Error('Неверные имя пользователя или пароль');
        if (res.token){
          localStorage.setItem('jwt', res.token)
          history.push('/main');
          return
        }
      }).catch((err)=>{console.log(err)});
  }

  function handleTokenCheck(){
    if (localStorage.getItem('jwt')){
      let currentToken = localStorage.getItem('jwt');
      authorization.checkToken(currentToken)
      .then((currentUser)=>{
          setLoggedIn(true)
          setCurrentUserEmail(currentUser.data.email);
      })
    }
  }

  function handleLogOut(){
    if (localStorage.getItem('jwt')){
          localStorage.removeItem('jwt');
        history.push('/login');
        return
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="page">
              
              <Switch>

                <ProtectedRoute
                  path="/main"
                  loggedIn={loggedIn}

                  headerUserEmail={currentUserEmail}
                  isLoggedIn={loggedIn}
                  handleHeaderLink={handleLogOut}

                  component={Main}
                  cards={currentCards}
                  onAddPlace = {handleAddPlaceClick}
                  onEditAvatar = {handleEditAvatarClick}
                  onEditProfile = {handleEditProfileClick}
                  onOpenFullSizeImage = {hanldeCardClick}
                  onLikeClick={handleLikeCard}
                  onDeleteButtonClick={handleDeleteCard}
                />

                <Route path="/login">
                <Header
                     headerUserEmail=''
                     headerLinkRoute="/register"
                     headerLinkText="Регистрация"
                     isLoggedIn={loggedIn}
                     handleHeaderLink={null}
                 />
                  <Login 
                    onLoginUser={handleLogin}
                  />
                </Route>

                <Route path="/register">
                  <Header
                    headerUserEmail=''
                    headerLinkRoute="/login"
                    headerLinkText="Войти"
                    isLoggedIn={loggedIn}
                    handleHeaderLink={null}
                  />
                  <Register 
                    onRegisterUser={handleRegister}
                    isClosed={closeAllPopups}
                    registrationSuccessfulOpen={isPopupRegistrationSuccessfulOpen}
                    registrationFailedOpen={isPopupRegistrationFailedOpen}
                  />
                </Route>  

              </Switch>

              <Footer />

              <ImagePopup
                      url={selectedCard.url}
                      name={selectedCard.name}
                      isOpen={isPopupWithImageOpen}
                      isClosed={closeAllPopups}
              />

              <AddPlacePopup
                      isOpen={isPopupAddPlaceOpen}
                      isClosed={closeAllPopups}
                      onAddPlace={handleAddPlaceSubmit}
              />
                    
              <EditProfilePopup 
                      isOpen={isPopupEditProfileOpen} 
                      onClose={closeAllPopups}
                      onUpdateUser={handleUpdateUser}  
              />

              <EditAvatarPopup 
                      isOpen={isPopupEditAvatarOpen}
                      isClosed={closeAllPopups}
                      editAvatar={handleUpdateAvatar}
              />
        </div>
      </div>
    </CurrentUserContext.Provider>  
  );
}

export default App;