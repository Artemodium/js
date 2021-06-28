import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {addNewMessageActionCreator, updateMessageActionCreator} from "../../redux/message-reducer";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map((el) => <DialogItem name={el.name} id={el.id}/>)

    let messagesElements = props.messageData.map((el) => <Message message={el.message}/>)

    let getText = () => {
        props.dispatch(addNewMessageActionCreator());
    }

    let onMessageChange = (e) => {
        let newText = e.target.value;
        props.dispatch(updateMessageActionCreator(newText))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
                <div>
                    <textarea onChange={onMessageChange}
                              value={props.message}/>
                </div>
                <div>
                    <button onClick={getText}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;