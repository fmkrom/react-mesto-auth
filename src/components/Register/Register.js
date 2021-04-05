import '../../index.css';
import '../EnterPage/EnterPage.css';

import {useState} from 'react';

//import currentAuthorizationApi from '../../utils/authorizationApi.js';

import userRegister from "../../utils/authorization.js";

import Header from '../Header/Header';
import EnterPage from '../EnterPage/EnterPage';
import InfoTooltipSucess from '../InfoTooltipSucess/InfoTooltipSucess';
import InfoTolltipFail from '../InfoTolltipFail/InfoTooltipFail';

function Register(){

    const [registerUserName, setRegisterUserName] = useState('');
    const [registerUserEmail, setRegisterUserEmail] = useState('');

    function handleRegisterUserNameSubmit(e){
        setRegisterUserName(e.target.value);
        //console.log(e.target.value);
    }    

    function handleRegisterUserEmailSubmit(e){
        setRegisterUserEmail(e.target.value);
        //console.log(e.target.value);
    }    

    function handleRegisterUserSubmit(e){
        e.preventDefault();
        
        //console.log('handleRegisterUserSubmit works!!');
        //console.log('Register data in Register form:', registerUserName, registerUserEmail);
        
        userRegister(registerUserName, registerUserEmail)
        .then((newData)=>{console.log('This is register newData: ', newData)})
        .catch(err => console.log(err));
    }

    return (
    <div className="page__content">
        
        <Header 
        userEmail=''
        link="/"
        linkText="Вход"
        isFrontPage={false}
        />    

        <EnterPage
        formTitle='Регистрация'
        formName='form__register'
        onSubmit={handleRegisterUserSubmit}
        buttonText='Зарегистрироваться'
        formSubtitle='Уже зарегистрированы? Войти'
        >
        <input value={registerUserName} onChange={handleRegisterUserNameSubmit} required className="enter-form__field" placeholder="Email" type="email" minLength="2" maxlenght="40"/>
        <span className="form-error form-error_hidden"></span>
        <input value={registerUserEmail} onChange={handleRegisterUserEmailSubmit} required className="enter-form__field" placeholder="Пароль" type="text" minLength="1" maxlenght="200"/>
        <span className="form-error form-error_hidden"></span>    
        </EnterPage>

        <InfoTooltipSucess isOpen={false} />
        <InfoTolltipFail isOpen={false} />  

    </div>
    )
}

export default Register;

/*

упростил код так, как ты рекомендовал. Все действительно стало проще.

Но базово проблема пока остается. И  проблема вот такая: 

И при регистрации и при вводе логина/пароля - все работает нормально. Т.е. вкладка Network возвращает все что нужно: мэйл, id, токен и т.д.
Но вот вопрос: как эти данные (те же мэйл или токен) передавать дальше в другие функции?

Я планировал так. При сабмите формы регистрации вызывается api-метод (userRegister... 'POST'). А дальше после того, как от сервера придет ответ - работаем с этими данными чтобы вставить их в прочие функции (может даже, используя контекст пользователя):

function handleRegisterUserSubmit(e){
    e.preventDefault();
        
    userRegister(registerUserName, registerUserEmail)
    .then((newData)=>{
        /*здесь были бы функции: 
        выветить в хедере e-mail пользователя,
        показать модальное окно успешной/неуспешной регистрации 
        переход на главную страницу и т.д.
        */ 
/*  }).catch(err => console.log(err));
}

Но вот на этом этапе .then((newData)=>{...} это newData возвращается как undefined.
Не понимаю, как эти данные нового пользователя (email, id, токен) вытащить чтобы использовать в других функциях. :(

*/
