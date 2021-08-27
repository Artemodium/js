import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/preloader";
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if(!props.userProfile){
        return <Preloader />
    }
    return (
        <div>
           {/* <div>
                <img
                    src="https://im0-tub-ru.yandex.net/i?id=06af78c162f87f8d18fda776e9f42ec1&n=13&exp=1"
                    alt=""
                />
            </div>*/}
            <div className={s.descBlock}>
                <img src={props.userProfile.photos.small} alt=""/>
                <div>{props.userProfile.fullName}</div>
                <div>{props.userProfile.userId}</div>
                <div>{props.userProfile.aboutMe}</div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
};

export default ProfileInfo;
