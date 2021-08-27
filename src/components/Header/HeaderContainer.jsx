import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {autoAuth} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
       this.props.autoAuth()
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

export default connect(mapStateToProps, {autoAuth})(HeaderContainer);
