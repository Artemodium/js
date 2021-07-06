import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map((el) => <DialogItem name={el.name} id={el.id} key={el.id}/>)

    let messagesElements = props.messagesData.map((el) => <Message message={el.message} id={el.id} key={el.id}/>)

    let getText = () => {
        props.getText();
    }

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.onMessageChange(body);
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
                    <textarea onChange={ onMessageChange }
                              value = { props.text } />
                </div>
                <div>
                    <button onClick={ getText }>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;