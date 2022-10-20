// import react usestate useeffect
import React, {useState, useEffect} from "react";

// import axios
import axios from "axios";

const ConditionalCompining = () => {
  // url api users
  const url = "https://jsonplaceholder.typicode.com/users";

  // is loading state 
  const [isLoading, setIsLoading] = useState(true);
  
  // is error state
  const [isError, setIsError] = useState(false);

  // users state
  const [users, setUsers] = useState([]);

  // get users api
  const getUsers = () => {
    // set is error false
    setIsError(false);

    // set is loading true
    setIsLoading(true);

    // axios
    axios.get(url)
    .then( (res) => {
      // set users 
      setUsers(res.data);
      setIsLoading(false);
    })
    .catch( (err) => {
      // set isError true
      setIsError(true);
      setIsLoading(false);
    })
  }

  // use effect get users
  useEffect( () => {
    getUsers();
  }, []);

  // if is loading, is error
  if(isLoading) {
    return (
      <div className="container pt-5">
        <h1>Loading...</h1>
      </div>
    )
  } else if(isError) {
    return(
      <div className="container pt-5">
        <h1>Spiacente, c'è un errore</h1>
      </div>
    )
  } else {
    // no loading, no error
    return (
      <div className="container">
        <h2 className="mb-4">Conditional Rendering</h2>
  
        <div className="row">
          {users.map( (user) => {
            return(
              <div className="col-12 col-md-6" key={user.id}>
                <div className="card">
                  <h1>{user.name}</h1>
                  <a href={`http://${user.website}`}>Website</a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
};

export default ConditionalCompining;
