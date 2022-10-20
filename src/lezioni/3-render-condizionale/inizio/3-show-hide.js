import React, { useState, useEffect } from "react";

const HideorShowComponent = () => {
  // show set show
  const [show, setShow] = useState(true);

  // toggle show
  const toggleShow = () => (e) => {
    setShow(!show);
  }

  return (
    <div>
      <h1 className="mb-4">Show or Hide Component</h1>
      <div className="card shadow text-center py-4">
        {/* btn */}
        <button onClick={toggleShow()} type="button" className="btn btn-info mx-auto">
          {show ? 'Nascondi' : 'Mostra'}
        </button>

        {/* if show true show component test */}
        {show && <ComponentTest/>}
      </div>
    </div>
  );
};

// componente test
const ComponentTest = () => {
  // timer
  const [counter, setCounter] = useState(0);

  // use effect timer
  useEffect( () => {
    // timer
    const timer = setTimeout(() => {
      // set counter ++
      setCounter(counter => counter + 1);
    }, 1000);

    // clear timer
    return () => clearTimeout(timer);
  }, [counter])

  return(
    <div>
      <h1>{counter}</h1>
    </div>
  )
}

export default HideorShowComponent;
