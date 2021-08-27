const ADD_MESSAGE = 'ADD-MESSAGE';

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
}

const messageReducer = (state = initialState, action) => {

    let id = state.messagesData.length + 1;

    switch (action.type) {
        case ADD_MESSAGE:
        return {...state,
            messagesData: [...state.messagesData, {id: id, message: action.newTextMessage}]
        }
        default:
            return state;
    }
}

export const addNewMessageActionCreator = (newTextMessage) => ({type: ADD_MESSAGE, newTextMessage});

export default messageReducer;