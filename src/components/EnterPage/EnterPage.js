import '../../index.css';
import './EnterPage.css';

function EnterPage(){
  return (
      <section className="enter-form">
              <div className="enter-form__content-block">
                  <div className="enter-form__form-container">
                      <h3 className="enter-form__title">Form title</h3>
                          <form className="form" noValidate>
                              <input required className="enter-form__field" placeholder="Email" type="text" minLength="2" maxlenght="40"/>
                              <span className="form-error form-error_hidden" id="input_editprofile-name-error"></span>
                              <input required className="enter-form__field" placeholder="Пароль" type="text" minLength="2" maxlenght="200"/>
                              <span className="form-error form-error_hidden" id="input_editprofile-job-error"></span>
                              <button className="enter-form__button-save" type="submit">Button Text</button>
                          </form>
                          <span class="enter-form__subtitle">Уже зарегистрированы? Войти</span>
                  </div>
              </div>
    </section>
  )
} 

export default EnterPage;