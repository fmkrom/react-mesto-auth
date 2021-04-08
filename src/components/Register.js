import '../index.css';
import './styles/EnterPage.css';

import {useState} from 'react';

import EnterPage from './EnterPage.js';
import InfoTooltipSucess from './InfoTooltipSucess.js';
import InfoTolltipFail from './InfoTooltipFail.js';

function Register(props){

    const [registerUserName, setRegisterUserName] = useState('');
    const [registerUserEmail, setRegisterUserEmail] = useState('');

    const [registrationSucesfull, setRegistrationSucesfull] = useState(false);
    const [registrationFailed, setRegistrationFailed] = useState(false);

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
        props.onRegisterUser(registerUserName, registerUserEmail);
        props.onRegisterUser ? setRegistrationSucesfull(true) : setRegistrationFailed(true);
    }

    return (
    <>
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

        <InfoTooltipSucess isOpen={registrationSucesfull} />
        <InfoTolltipFail isOpen={registrationFailed} />  
    </>
    )
}

export default Register;