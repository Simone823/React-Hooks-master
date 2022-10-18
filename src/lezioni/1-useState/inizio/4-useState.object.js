// import react usestate
import React, {useState} from "react";

const StateObject = () => {
  // user set user usetate
  const [user, setUser] = useState({
    name: 'Mario',
    age: 25,
    saluto: 'Ciao'
  });

  // change saluto
  const changeSaluto = () => (e) => {
    // set user (spread operator per mantenere le proprietà dell''oggetto non modificate) 
    setUser({
      ...user,
      age: 26,
      saluto: 'Ho compito gli anni!'
    });
  }

  return (
    // item
    <div className="item shadow">
      <div className="text-left">
        <h4>{user.name}</h4>
        <h5>{user.age}</h5>
        <h6>{user.saluto}</h6>
      </div>

      {/* btn */}
      <button onClick={changeSaluto()} type="button" className="button">Cambia saluto</button>
    </div>
  );
};

export default StateObject;
