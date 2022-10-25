import React from 'react';

import User from './User';

function ListUsers({AppContext}) {
    // info context AppContext
    const info = React.useContext(AppContext);

    return (
        // list users
        <ul className='list-users'>
            {/* map users */}
            {info.users.map((user) => {
                return(
                    <li key={user.id}>
                        <User AppContext={AppContext} id={user.id} name={user.name}/>
                    </li>
                )
            })}
        </ul>
    )
}

export default ListUsers