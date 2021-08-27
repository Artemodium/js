import {authReq} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    email: null,
    id: null,
    login: null,
    isLogin: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}

export const setAuthUserData = (email, id, login, isLogin) => ({type: SET_USER_DATA, data: {email, id, login, isLogin}});

export const autoAuth = () => {
    return (dispatch) => {
        authReq().then(data => {
            if(data.resultCode===0){
                let {email, id, login} = data.data;
                dispatch(setAuthUserData(email, id, login, true));
            }
        });
    }
}

export default authReducer;