import '../../index.css';
import '../EnterPage/EnterPage.css';

import { useState } from 'react';

import EnterPage from '../EnterPage/EnterPage';
import Header from '../Header/Header';

import apiUserLogIn from '../../utils/loginApi.js';

function Login(){
    
    const [loginUserName, setLoginUserName] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');

    function handleLoginUserNameSubmit(e){
        setLoginUserName(e.target.value);
        //console.log(e.target.value);
    }    

    function handleloginUserEmailSubmit(e){
        setLoginUserEmail(e.target.value);
        //console.log(e.target.value);
    }    

    function handleLoginUserSubmit(e){
        e.preventDefault();
        
        apiUserLogIn(loginUserName, loginUserEmail)
        .then((newUserData) =>{console.log(
            'This is new user data in login: ', newUserData
            )})
    }
    
    
    return (
        <div className="page__content">
            <Header 
                userEmail=''
                link="/register"
                linkText="Регистрация"
                isFrontPage={false}
            />
            
            <EnterPage
                formTitle={'Вход'}
                formName='form__login'
                onSubmit={handleLoginUserSubmit}
                buttonText='Войти'
                formSubtitle=''
                >
                <input value={loginUserName} onChange={handleLoginUserNameSubmit} required className="enter-form__field" placeholder="Email" type="text" minLength="2" maxlenght="40"/>
                <span className="form-error form-error_hidden"></span>
                <input value={loginUserEmail} onChange={handleloginUserEmailSubmit} required className="enter-form__field" placeholder="Пароль" type="text" minLength="2" maxlenght="200"/>
                <span className="form-error form-error_hidden"></span>    
            </EnterPage>
        </div>
    )
}

export default Login;
