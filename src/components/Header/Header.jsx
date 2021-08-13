import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img
                src="https://im0-tub-ru.yandex.net/i?id=385467efeb39b0a98d481decd979931a&n=13&exp=1"
                alt=""
            />
            {
                !props.isLogin ?
                    <div className={s.loginBlock}>
                        <NavLink to={'/login'}>Login</NavLink>
                    </div>
                    :
                    <div className={s.loginBlock}>
                        <NavLink to={'/login'}>{props.login}</NavLink>
                    </div>
            }
        </header>
    );
};

export default Header;
