import React from 'react'

function User({id, name, removeUser}) {

    return (
        <div className='item shadow'>
            {/* name */}
            <h3>{name}</h3>

            {/* btn delete user */}
            <button onClick={removeUser(id)} type='button' className='button delete-button'>X</button>
        </div>
    )
}

export default User