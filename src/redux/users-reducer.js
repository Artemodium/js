import {followReq, getUsersReq, unFollowReq} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const SET_PAGES = 'SET_PAGES'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    pagesSize: 5,
    totalUsersCount: 19,
    currentPage: 1,
    interval: 5,
    start: 0,
    end: 5,
    isFetching: true,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.userId) {
                        return {...el, followed: true}
                    }
                    return el
                })
            }
        case  UNFOLLOW:
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.userId) {
                        return {...el, followed: false}
                    }
                    return el
                })
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.isFetching ? [...state.followingInProgress, action.id]
                                                                 : state.followingInProgress.filter(id => id !== action.id)
            }

        case SET_USERS: {
            return {...state, users: [...action.users]}
        }
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USER_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case SET_PAGES:
            return {...state, start: action.start, end: action.end}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unFollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USER_COUNT, totalCount})
export const setPages = (start, end) => ({type: SET_PAGES, start, end})
export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setFollowingProgress = (isFetching, id) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, id})

export const getUsers = (currentPage, pagesSize) => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
        getUsersReq(currentPage, pagesSize).then(data => {
            dispatch(setIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
            dispatch(setCurrentPage(currentPage));
        })
    }
}

export const unFollow = (userId) => {
    return (dispatch) => {
        dispatch(setFollowingProgress(true, userId))
        unFollowReq(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unFollowSuccess(userId));
            }
            dispatch(setFollowingProgress(false, userId));
        })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(setFollowingProgress(true, userId))
        followReq(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(setFollowingProgress(false, userId));
        })
    }
}

export default usersReducer;