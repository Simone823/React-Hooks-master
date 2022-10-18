// import react usestate
import React, {useState} from "react";

const CounterComponent = () => {
  // counter setcounter
  const [counter, setCounter] = useState(0);

  // increment counter
  const incrementCounter = () => (e) => {
    setCounter( (counter) => {
      if(counter + 1 === 11) {
        return counter;
      } else {
        return counter + 1;
      }
    })
  }

  // decrement counter
  const decrementCounter = () => (e) => {
    setCounter( (counter) => {
      if(counter === 0) {
        return counter
      } else {
        return counter - 1;
      }
    });
  }

  // reset counter
  const resetCounter = () => (e) => {
    setCounter(0);
  }

  return (
    <div className="col-6 offset-3 bg-white shadow py-5 w-75">
      {/* counter */}
      <h4 className="mb-3">{counter}</h4>

      {/* btn */}
      <div className="d-flex justify-content-center gap-5 mb-4">
        {/* Decrement */}
        <button onClick={decrementCounter()} type="button" className="btn btn-info">Decrementa</button>

        {/* Increment */}
        <button onClick={incrementCounter()} type="button" className="btn btn-info">Incrementa</button>
      </div>

      {/* btn reset */}
      <button onClick={resetCounter()} type="button" className="btn btn-danger">Reset</button>
    </div>
  );
};

export default CounterComponent;
