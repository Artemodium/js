import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setPagesAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC
} from "../../redux/users-reducer";
import Users from "./Users";
import React from "react";
import * as axios from "axios";

class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumb) => {
        this.props.setCurrentPage(pageNumb)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumb}&count=${this.props.pagesSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render()
    {
        return <Users
            totalUsersCount = {this.props.totalUsersCount}
            pagesSize = {this.props.pagesSize}
            currentPage = {this.props.currentPage}
            setCurrentPage={this.props.setCurrentPage}
            users = {this.props.users}
            onPageChanged = {this.onPageChanged}
            follow = {this.props.follow}
            unfollow = {this.props.unfollow}
            setPages = {this.props.setPages}
            interval = {this.props.interval}
            start = {this.props.start}
            end = {this.props.end}
        />
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
        end: state.usersPage.end
    }
}

let mapDispatchToProps = (dispatch) => {
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);