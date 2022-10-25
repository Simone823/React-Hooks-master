import React from 'react';

import User from './User';

function ListUsers({users, removeUser}) {

    return (
        // list users
        <ul className='list-users'>
            {/* map users */}
            {users.map((user) => {
                return(
                    <li key={user.id}>
                        <User id={user.id} name={user.name} removeUser={removeUser}/>
                    </li>
                )
            })}
        </ul>
    )
}

export default ListUsers