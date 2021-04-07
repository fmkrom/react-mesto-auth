import '../../index.css';
import '../EnterPage/EnterPage.css';

import {useState} from 'react';

//import currentAuthorizationApi from '../../utils/authorizationApi.js';

import Header from '../Header/Header';
import EnterPage from '../EnterPage/EnterPage';
import InfoTooltipSucess from '../InfoTooltipSucess/InfoTooltipSucess';
import InfoTolltipFail from '../InfoTolltipFail/InfoTooltipFail';

function Register(props){

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
        props.onRegisterUser(registerUserName, registerUserEmail)
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