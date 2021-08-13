import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {authReq} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        authReq().then(data => {
                if(data.resultCode===0){
                    let {email, id, login} = data.data;
                    this.props.setAuthUserData(email, id, login, true);
                }
            });
    }

    render() {
        return (
                <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    isLogin: state.auth.isLogin,
    login: state.auth.login
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
