import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://im0-tub-ru.yandex.net/i?id=06af78c162f87f8d18fda776e9f42ec1&n=13&exp=1"
                    alt=""
                />
            </div>
            <div className={s.descBlock}>
                ava + desc
            </div>
        </div>
    );
};

export default ProfileInfo;
