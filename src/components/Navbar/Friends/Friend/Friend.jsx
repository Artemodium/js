import s from './Friend.module.css'
import {NavLink} from "react-router-dom";

const Friend = (props) => {
    return (

        <div className={s.friend}>
            <NavLink to={"/" + props.name} activeClassName={s.active}>
                <div className={s.ava}>
                    {props.ava}
                </div>
                <div className={s.name}>
                    {props.name}
                </div>
            </NavLink>
        </div>

    );
};

export default Friend;
