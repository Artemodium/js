import React from "react";
import styles from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {reduxForm, Field} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../common/FormsControl/FormsControl";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map((el) => <DialogItem name={el.name} id={el.id} key={el.id}/>)

    let messagesElements = props.messagesData.map((el) => <Message message={el.message} id={el.id} key={el.id}/>)

    let sendText = (values) => {
        props.addText(values.newMessageBody);
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {dialogsElements}
            </div>
            <div>
                <div className={styles.messages}>
                    {messagesElements}
                </div>
                <AddMessageFormRedux onSubmit={sendText}/>
            </div>
        </div>
    )
}

const maxLength = maxLengthCreator(10);

const addMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newMessageBody' placeholder='Enter your message'
                       validate={[required, maxLength]} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(addMessageForm)

export default Dialogs;