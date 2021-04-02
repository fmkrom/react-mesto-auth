import '../../index.css';
import '../EnterPage/EnterPage.css';

import EnterPage from '../EnterPage/EnterPage';

function handleSubmit(){
    console.log('Login Register function works!');
}

function Register(){
    return (
        <EnterPage
        formTitle='Регистрация'
        formName='form__register'
        onSubmit={handleSubmit}
        buttonText='Зарегистрироваться'
        formSubtitle='Уже зарегистрированы? Войти'
        >
        <input required className="enter-form__field" placeholder="Email" type="text" minLength="2" maxlenght="40"/>
        <span className="form-error form-error_hidden"></span>
        <input required className="enter-form__field" placeholder="Пароль" type="text" minLength="2" maxlenght="200"/>
        <span className="form-error form-error_hidden"></span>    
        </EnterPage>
    )
}

export default Register;
