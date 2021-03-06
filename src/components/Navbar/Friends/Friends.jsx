import s from './Friends.module.css'
import Friend from "./Friend/Friend";

const Friends = (props) => {

    let friendsList = props.friends.map((el) => <Friend ava={el.ava} name={el.name} id={el.id} key={el.id}/>)

    return (
        <div className={s.friends}>
            <div className={s.head}>
                <span>Friends</span>
            </div>
            <div className={s.row}>
                <div className={s.friendsBlock}>
                    {friendsList}
                </div>
            </div>
        </div>
    );
};

export default Friends;
