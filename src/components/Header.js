import '../components/styles/Header.css';
import mestoLogo from '../images/__graphics/graphics__logo.png';
import { Link, useLocation } from 'react-router-dom';

function Header(props){
    
  const currentPath = useLocation();
  
  const linkText = `${currentPath === '/login' ? 'Регистрация' : 'Войти'}`;
  const redirectRoute = `${currentPath === '/login' ? '/register' : '/login'}`;

  return (
      <div className="header">
              <div className="header__logo">
                <img src={mestoLogo} className="header__vector" alt="Лого" />
              </div>  
              <div className="header__info">
                <p className="header__user-email">{props.userEmail}</p>
                <Link to={props.link} className={`header__link ${props.isLoggedIn ? "header__link_frontpage" : "header__link_enter-page"}`}>{props.isLoggedIn ? 'Выход' : 'Войти'}</Link>
              </div>                  
      </div>
  )
};

export default Header;