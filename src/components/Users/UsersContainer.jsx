import {connect} from "react-redux";
import {
    follow,
    setCurrentPage, setFollowingProgress, setIsFetching,
    setPages,
    setTotalUsersCount,
    setUsers,
    unFollow
} from "../../redux/users-reducer";
import Users from "./Users";
import React from "react";
import Preloader from "../common/preloader/preloader";
import {getUsersReq} from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true)
        getUsersReq(this.props.currentPage, this.props.pagesSize).then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumb) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(pageNumb)
        getUsersReq(pageNumb, this.props.pagesSize).then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)
            })
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
                setFollowingProgress={this.props.setFollowingProgress}
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

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currenPage) => {
            dispatch(setCurrentPageAC(currenPage))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        setPages: (start, end) => {
            dispatch(setPagesAC(start, end))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}*/

export default connect(mapStateToProps,
    {
        follow,
        unFollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        setPages,
        setIsFetching,
        setFollowingProgress
    })(UsersContainer);