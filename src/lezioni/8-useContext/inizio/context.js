import React, {useState, useContext} from "react";

// import data
import {data} from '../../../data';

// import list users component
import ListUsers from './ListUsers';

// app context
const AppContext = React.createContext();

const UseContext = () => {

  // users set users
  const [users, setUsers] = useState(data);

  // delete user
  const deleteUser = (id) => (e) => {
    // set users filter users
    setUsers(users.filter((user) => user.id !== id));
  } 

  return (
    <AppContext.Provider value={{users, deleteUser}} className="wrapper-prop-drilling">
      <h2>Use Context</h2>

      {/* list users */}
      <ListUsers AppContext={AppContext}/>
    </AppContext.Provider>
  );
};

export default UseContext;