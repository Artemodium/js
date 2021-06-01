import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://im0-tub-ru.yandex.net/i?id=06af78c162f87f8d18fda776e9f42ec1&n=13&exp=1"
          alt=""
        />
      </div>
      <div>
        ava + desc
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
