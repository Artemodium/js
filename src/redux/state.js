import {rerenderEntireTree} from "../render";

let state = {
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
        ]
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
            {id: 1, name: 'Dymych', ava:''},
            {id: 2, name: 'Andr', ava:''},
            {id: 3, name: 'Katya', ava:''},
            {id: 4, name: 'Sveta', ava:''},
            {id: 5, name: 'Basya', ava:''}
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 4,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}

export default state;