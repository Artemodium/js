import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postsData={props.postsData}
               addPost={props.addPost}
               newPostText={props.newPostText}
               updateNewPostText={props.updateNewPostText} />
    </div>
  );
}

export default Profile;
