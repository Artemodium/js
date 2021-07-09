import s from './Users.module.css';
import * as axios from "axios";
import React from "react";

class Users extends React.Component {

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

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pagesSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map(el => {
                        return <span className={this.props.currentPage === el && s.selectedName}
                        onClick={ (e) => { this.onPageChanged(el) }} >{el} </span>
                    })}
                </div>
                {
                    this.props.users.map(el => <div key={el.id}>
                        <span>
                            <div>
                                <img alt={''}
                                     src={el.photos.small != null ? el.photos.small : 'https://im0-tub-ru.yandex.net/i?id=4f45d4cc87a63fde69658f1253e781bc&n=13&exp=1'}
                                     className={s.usersPhoto}/>
                            </div>
                            <div>
                                {
                                    el.followed
                                        ? <button onClick={() => {
                                            this.props.unfollow(el.id)
                                        }}>Unfollow</button>
                                        : <button onClick={() => {
                                            this.props.follow(el.id)
                                        }}>Follow</button>
                                }
                            </div>
                        </span>
                        <span>
                            <div>{el.name}</div>
                            <div>{el.status}</div>
                        </span>
                        <span>
                            <div>{'el.location.country'}</div>
                            <div>{'el.location.city'}</div>
                        </span>
                    </div>)}
            </div>
        )
    }
}

export default Users;