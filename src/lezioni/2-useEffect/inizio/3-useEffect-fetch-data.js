// import react usestate useffect
import React, { useEffect, useState } from "react";

// import axios
import axios from "axios";

const FetchComponent = () => {
  // url api
  const url = "https://jsonplaceholder.typicode.com/users";

  // users set users usestate
  const [users, setUsers] = useState([]);

  // get users
  const getUsers = () => {
    // axios
    axios.get(url)
    .then((res) => {
      // set users state
      setUsers(res.data);
    })
    .catch((err) => {
      console.warn(err);
    })
  }

  // use effect get users
  useEffect(() => {
    getUsers();
  }, []);


  return (
    <div className="container">

      {/* row 1 */}
      <div className="row text-center mb-4">
        <h1>Fetch Component</h1>
      </div>

      {/* row 2 */}
      <div className="row gy-4">
        {/* users map */}
        {users.map( (user) => {
          return(
            <div className="col-12 col-md-6" key={user.id}>
              <div className="card">
                <h3>{user.name}</h3>
                <a href={`http://${user.website}`}>Website</a>
              </div>
            </div>
          )
        })}

      </div>

    </div>
  );
};

export default FetchComponent;
