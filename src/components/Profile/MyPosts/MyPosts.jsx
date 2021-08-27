import s from './MyPosts.module.css'
import Post from './Post/Post'
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControl/FormsControl";

const maxLength = maxLengthCreator(10);

const myPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field component={Textarea} placeholder='Enter your message' name='textMessage'
                           validate={[required, maxLength]} />
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
        </form>
    )
}

const MyPostReduxForm = reduxForm({form: 'myPost'})(myPostForm)

const MyPosts = (props) => {

    let postsElements = props.postsData.map(el => <Post message={el.message} like={el.likesCount} key={el.id}
                                                        id={el.id}/>)

    let onAddPost = (values) => {
        props.addPost(values.textMessage);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <MyPostReduxForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;