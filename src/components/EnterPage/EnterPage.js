import '../../index.css';
import './EnterPage.css';

function EnterPage(props){
  return (
      <section className="enter-form">
              <div className="enter-form__content-block">
                  <div className="enter-form__form-container">
                      <h3 className="enter-form__title">{props.formTitle}</h3>
                          <form className="form" name={props.formName} onSubmit={props.onSubmit} noValidate>
                              {props.children}
                              <button className="enter-form__button-save" type="submit">{props.buttonText}</button>
                          </form>
                          <span class="enter-form__subtitle">{props.formSubtitle}</span>
                  </div>
              </div>
    </section>
  )
} 

export default EnterPage;