const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        {
            id: 1, photoUrl: 'https://pbs.twimg.com/media/DSzPSTWX4AEGYd9.png',
            followed: true, fullName: 'Dmitriy', status: 'I am a boss',
            location: {country: 'Russia', city: 'Ekb'}
        },
        {
            id: 2, photoUrl: 'https://pbs.twimg.com/media/DSzPSTWX4AEGYd9.png',
            followed: true, fullName: 'Sasha', status: 'I am a boss too',
            location: {country: 'Russia', city: 'Moscow'}
        },
        {
            id: 3, photoUrl: 'https://pbs.twimg.com/media/DSzPSTWX4AEGYd9.png',
            followed: false, fullName: 'Andrew', status: 'I am a shop assistant',
            location: {country: 'Belarus', city: 'Minsk'}
        },
    ]
};

const usersReducer = (state = initialState, action) => {
   // let id = state.users.length + 1
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: [state.users.map(el => el.id === action.userId ? {...el, followed:true} : el)]
            }

        case  UNFOLLOW:
            return {
                ...state,
                users: [state.users.map(el => el.id === action.userId ? {...el, followed:false} : el)]
            }
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }

        default:
            return state;
    }
}

export const followAC = (usedId) => ({type: FOLLOW, usedId});
export const unFollowAC = (usedId) => ({type: UNFOLLOW, usedId});
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;