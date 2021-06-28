const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

let initialState = {
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
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            state.messagesData.push({id: 6, message: state.newMessageText});
            state.newMessageText = '';
            return state;
        case UPDATE_MESSAGE:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addNewMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateMessageActionCreator = (text) => ({type: UPDATE_MESSAGE, newText: text});


export default messageReducer;