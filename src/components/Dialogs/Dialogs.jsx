import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map((el) => <DialogItem name={el.name} id={el.id}/>)

    let messagesElements = props.messageData.map((el) => <Message message={el.message}/>)

    let text = React.createRef();
    let getText = () => {
        text.current.value ? alert(text.current.value) : alert('Enter something')
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
                    <textarea ref={ text }></textarea>
                    <button onClick={ getText }>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;