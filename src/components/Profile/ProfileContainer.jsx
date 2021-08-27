import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom"
import {getStatus, setProfile, updateStatus} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.setProfile(userId)
        this.props.getStatus(userId)
    }


    render() {
        return (
            <div>
                <Profile {...this.props}
                         userProfile={this.props.userProfile}
                         status = {this.props.status}
                         updateStatus={this.props.updateStatus} />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    userProfile: state.profilePage.userProfile,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, {setProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
