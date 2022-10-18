// import react useState
import React, {useState} from "react";

// import data
import {data} from '../../../data';

const ArrayState = () => {
  // user set user usetate
  const [users, setUser] = useState(data);

  // delete user
  const deleteUser = (id) => (e) => {
    // new users
    const newUser = users.filter((user) => user.id !== id);

    // set user use state
    setUser(newUser);
  }

  return (
    <React.Fragment>
      {/* map users */}
      {users.map( (user) => {
        return (
          <div className="item shadow" key={user.id}>
            <h2>{user.name}</h2>

            {/* btn */}
            <button onClick={deleteUser(user.id)} type="button" className="button delete-button">X</button>
          </div>
        )
      })}
    </React.Fragment>
  );
};

export default ArrayState;
