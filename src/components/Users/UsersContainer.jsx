import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setPages,
    unFollow,
    getUsers
} from "../../redux/users-reducer";
import Users from "./Users";
import React from "react";
import Preloader from "../common/preloader/preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pagesSize);
    }

    onPageChanged = (pageNumb) => {
        this.props.getUsers(pageNumb, this.props.pagesSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pagesSize={this.props.pagesSize}
                currentPage={this.props.currentPage}
                setCurrentPage={this.props.setCurrentPage}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                setPages={this.props.setPages}
                interval={this.props.interval}
                start={this.props.start}
                end={this.props.end}
               /* setFollowingProgress={this.props.setFollowingProgress}*/
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pagesSize: state.usersPage.pagesSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        interval: state.usersPage.interval,
        start: state.usersPage.start,
        end: state.usersPage.end,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose(connect(mapStateToProps,
        {
            follow,
            unFollow,
            setCurrentPage,
            setPages,
            getUsers
        }),
    withAuthRedirect
)(UsersContainer)
