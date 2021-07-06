import s from './MyPosts.module.css'
import Post from './Post/Post'
import React from "react";

const MyPosts = (props) => {

    let postsElements = props.postsData.map(el => <Post message={el.message} like={el.likesCount} key={el.id} id={el.id}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={ onPostChange }
                        ref={ newPostElement }
                        value={ props.newPostText }/>
                </div>
                <div>
                    <button onClick={ onAddPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
               { postsElements }
            </div>
        </div>
    );
};

export default MyPosts;