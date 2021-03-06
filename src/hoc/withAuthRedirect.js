import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
    isLogin: state.auth.isLogin
})

export const withAuthRedirect = (Component) => {
    class  RedirectComponent extends React.Component {
        render () {
            if(!this.props.isLogin) return <Redirect to={'/login'} />
            return <Component {...this.props} />
        }
    }
    let connectedRedirectComponent = connect(mapStateToPropsForRedirect, {})(RedirectComponent)
    return connectedRedirectComponent;
}