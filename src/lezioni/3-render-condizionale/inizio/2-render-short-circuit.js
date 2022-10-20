// import react usestate
import React, {useState} from "react";

const ShortRender = () => {
  // parola usestate
  const parola = useState('Parola');

  // toggle set toggle
  const [toggle, setToggle] = useState(false);

  // change toggle status
  const changeToggleStatus = () => (e) => {
    setToggle(!toggle);
  }

  return (
    <div>
      <h2 className="mb-4">short render Component</h2>

      {/* parola */}
      <h4 className="mb-4">{parola && 'parola esempio'}</h4>

      {/* toggle */}
      {toggle ? <h5 className="text-success">Vero</h5> : <h5 className="text-danger">Falso</h5>}

      {/* btn toggle */}
      <button onClick={changeToggleStatus()} type="button" className="btn btn-primary">Cambia</button>
    </div>
  );
};

export default ShortRender;
