import s from './Users.module.css';
import React from "react";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pagesSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                <span onClick={(e) => {
                    props.setPages(0, 5)
                    props.setCurrentPage(1)
                    props.onPageChanged(1)
                }}>Begin </span>
                {props.start > 0 ? <span onClick={(e) => {
                    props.setPages(props.start - props.interval, props.end - props.interval)
                    props.setCurrentPage(props.start - props.interval + 1)
                    props.onPageChanged(props.start - props.interval + 1)
                }}
                                         className={props.start === 0 && s.inactive}>prev </span> : <span>prev </span>}
                {pages.slice(props.start, props.end).map(el => {
                    return <span className={props.currentPage === el && s.selectedName}
                                 onClick={(e) => {
                                     props.onPageChanged(el)
                                 }}>{el} </span>
                })}
                {props.end < pages.length ? <span onClick={(e) => {
                    props.setPages(props.start + props.interval, props.end + props.interval)
                    props.setCurrentPage(props.start + props.interval + 1)
                    props.onPageChanged(props.start + props.interval + 1)
                }}>next </span> : <span>next </span>}
                <span onClick={(e) => {
                    props.setPages(pages.length - 5, pages.length)
                    props.setCurrentPage(pages.length - 4)
                    props.onPageChanged(pages.length - 4)
                }}>End </span>
            </div>
            {
                props.users.map(el => <div key={el.id}>
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
                                            props.unfollow(el.id)
                                        }}>Unfollow</button>
                                        : <button onClick={() => {
                                            props.follow(el.id)
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

export default Users;