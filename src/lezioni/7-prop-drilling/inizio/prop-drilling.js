import React, {useState} from "react";

// import data
import {data} from '../../../data';

// import list users component
import ListUsers from './ListUsers';

const MainComponent = () => {
  // users set users
  const [users, setUsers] = useState(data);

  // delete user
  const deleteUser = (id) => (e) => {
    // set users filter users
    setUsers(users.filter((user) => user.id !== id));
  } 

  return (
    <div className="wrapper-prop-drilling">
      <h2>Passaggio di Proprietà a Cascata</h2>

      {/* list users */}
      <ListUsers users={users} removeUser={deleteUser}/>
    </div>
  );
};

export default MainComponent;
