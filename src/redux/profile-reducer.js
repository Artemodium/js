import {ProfileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postsData: [
        {id: 1, message: 'Hi, I am OK!', likesCount: 20},
        {id: 2, message: 'How are you?', likesCount: 15},
        {id: 3, message: "It's my first post", likesCount: 0}
    ],
    newPostText: 'it-kamasutra.com',
    userProfile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    let id = state.postsData.length + 1;

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData, {id: id, message: action.newPostText, likesCount: 0}],
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case  SET_USER_PROFILE:
            return {...state, userProfile: action.userProfile}
        case  SET_STATUS:
            return {...state, status: action.status}
        default:
            return state;
    }
}

export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const setProfile = (userId) => {
    return (dispatch) => {
        ProfileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        })
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        ProfileAPI.getStatus(userId).then(data => {
            dispatch(setStatus(data.data));
        })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        ProfileAPI.updateStatus(status).then(data => {
            if(data.resultCode===0) {
                dispatch(setStatus(status));
            }
        })
    }
}

export default profileReducer;