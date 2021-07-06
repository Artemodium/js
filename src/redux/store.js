import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";

let store = {
    _state: {
        messagesPage: {
            dialogsData: [
                {id: 1, name: 'Dymych'},
                {id: 2, name: 'Andr'},
                {id: 3, name: 'Katya'},
                {id: 4, name: 'Sveta'},
                {id: 5, name: 'Basya'}
            ],

            messagesData: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Everything Gonna be all right!'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            newMessageText: '123'
        },

        profilePage: {
            postsData: [
                {id: 1, message: 'Hi, I am OK!', likesCount: 20},
                {id: 2, message: 'How are you?', likesCount: 15},
                {id: 3, message: "It's my first post", likesCount: 0}
            ],
            newPostText: 'it-kamasutra.com'
        },

        sidebar: {
            friends: [
                {id: 1, name: 'Dymych', ava: ''},
                {id: 2, name: 'Andr', ava: ''},
                {id: 3, name: 'Katya', ava: ''},
                {id: 4, name: 'Sveta', ava: ''},
                {id: 5, name: 'Basya', ava: ''}
            ]
        }
    },

    _callSubscriber () {
        console.log('store changed')
    },

    getState() {
        return this._state
    },

    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { // action = {type: 'something' , arguments: some_arguments}
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messageReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);
    }
}

/*
window.store = store;
export default store;*/
