// import react useState useEffect
import React, {useState, useEffect} from "react";

const useEffectBasi = () => {
  // value use state
  const [value, setValue] = useState(0);

  // increment value
  const incrementValue = () => (e) => {
    setValue( (value) => {
      return value + 1;
    });
  }

  // use effect new message document title
  useEffect(() => {
    if(value === 0) {
      document.title = 'Nessun messaggio';
    } else {
      document.title = `Nuovo messaggio: ${value}`;
    }
  }, [value]);

  return (
    <div className="item shadow">
      {/* value */}
      <h4>{value}</h4>

      {/* btn */}
      <button onClick={incrementValue()} type="button" className="button">Incrementa</button>
    </div>
  );
};

export default useEffectBasi;
