import React, {useContext} from 'react'


function User({id, name, AppContext}) {

    // info use context appcontext
    const {deleteUser} = useContext(AppContext);

    return (
        <div className='item shadow'>
            {/* name */}
            <h3>{name}</h3>

            {/* btn delete user */}
            <button onClick={deleteUser(id)} type='button' className='button delete-button'>X</button>
        </div>
    )
}

export default User