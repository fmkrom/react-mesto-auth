import '../index.css';
import '../components/styles/EnterPage.css';

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
                          <span className="enter-form__subtitle">{props.formSubtitle}</span>
                  </div>
              </div>
    </section>
  )
} 

export default EnterPage;