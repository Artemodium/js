const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postsData: [
        {id: 1, message: 'Hi, I am OK!', likesCount: 20},
        {id: 2, message: 'How are you?', likesCount: 15},
        {id: 3, message: "It's my first post", likesCount: 0}
    ],
    newPostText: 'it-kamasutra.com',
    userProfile: null
};

const profileReducer = (state = initialState, action) => {

    let id = state.postsData.length + 1;

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData, {id: id, message: state.newPostText, likesCount: 0}],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case  SET_USER_PROFILE:
            return {...state, userProfile: action.userProfile}
        default:
            return state;
    }
}

export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const addPost = () => ({type: ADD_POST});
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile})

export default profileReducer;