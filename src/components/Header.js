import mestoLogo from '../images/__graphics/graphics__logo.png';

function Header(){
    return (
        <section className="header">
              <div className="header__logo">
                <img src={mestoLogo} className="header__vector" alt="Лого" />
              </div>
        </section>
    )
};

export default Header;