import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom"
import {setUserProfile} from "../../redux/profile-reducer";
import {getUserReq} from "../../api/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        userId = !userId ? userId = 18163 : userId;
        getUserReq(userId).then(data => {
                this.props.setUserProfile(data)
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} userProfile={this.props.userProfile}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    userProfile: state.profilePage.userProfile
})

let WithUrlContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlContainerComponent);