let Users = (props) => {

    return (
        <div>
            {
                props.users.map(el => <div key={el.id}>
                        <span>
                            <div>
                                <img alt={''} src={el.photoUrl}/>
                            </div>
                            <div>
                                <button>Follow</button>
                            </div>
                        </span>
                    <span>
                            <div>{el.fullName}</div>
                            <div>{el.status}</div>
                        </span>
                    <span>
                            <div>{el.location.country}</div>
                            <div>{el.location.city}</div>
                        </span>
                </div>)}
        </div>
    )
}


export default Users;