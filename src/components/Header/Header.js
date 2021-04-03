import './Header.css'
import mestoLogo from '../../images/__graphics/graphics__logo.png';
import { Link } from 'react-router-dom';

function Header(props){
    return (
        <div className="header">
              <div className="header__logo">
                <img src={mestoLogo} className="header__vector" alt="Лого" />
              </div>  
              <div className="header__info">
                <p className="header__user-email">{props.userEmail}</p>
                <Link to={props.link} className={`header__link ${props.isFrontPage ? "header__link_frontpage" : "header__link_enter-page"}`}>{props.linkText}</Link>
              </div>                  
        </div>
    )
};

export default Header;