import '../../index.css';
import '../EnterPage/EnterPage.css';

import EnterPage from '../EnterPage/EnterPage';
import Header from '../Header/Header';

function handleSubmit(){
    console.log('Login Submit function works!');
}

function Login(){
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
                onSubmit={handleSubmit}
                buttonText='Войти'
                formSubtitle=''
                >
                <input required className="enter-form__field" placeholder="Email" type="text" minLength="2" maxlenght="40"/>
                <span className="form-error form-error_hidden"></span>
                <input required className="enter-form__field" placeholder="Пароль" type="text" minLength="2" maxlenght="200"/>
                <span className="form-error form-error_hidden"></span>    
            </EnterPage>
        </div>
    )
}

export default Login;
