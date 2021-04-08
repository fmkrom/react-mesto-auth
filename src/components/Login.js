import '../index.css';
import './styles/EnterPage.css';

import { useState } from 'react';

import EnterPage from './EnterPage.js';

function Login(props){
    
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
        props.onLoginUser(loginUserName, loginUserEmail)       
    }
    
    
    return (
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
    )
}

export default Login;

/*
const jwt = localStorage.getItem('jwt');
console.log('This is user JWT in login:', jwt);

localStorage.setItem('user', JSON.stringify({
    name: 'Stas',
    professtion: 'web dev'
}));

const user = localStorage.getItem('user');

console.log(user);

const storageLength = localStorage.length;
console.log(storageLength);

localStorage.removeItem('user');

console.log(storageLength);
*/