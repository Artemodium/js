import {connect} from "react-redux";
import Friend from "./Friend";

let mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const FriendContainer = connect(mapStateToProps, mapDispatchToProps)(Friend);

export default FriendContainer;
