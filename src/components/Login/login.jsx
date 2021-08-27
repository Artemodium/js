import React from 'react';
import {reduxForm, Field} from "redux-form";
import {Input} from "../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength = maxLengthCreator(10);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={Input}
                       validate={[required, maxLength]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={Input}
                       validate={[required, maxLength]}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input}
                       validate={[required, maxLength]}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    /*const onSubmit = (formData) => {
        console.log(loginRequest(formData))
    }*/
    const onSubmit = (formData) => {
        console.log(formData)
    }


    return (
       <div>
           <h1>Login</h1>
           <LoginReduxForm onSubmit={onSubmit}/>
       </div>
    )
}

export default Login