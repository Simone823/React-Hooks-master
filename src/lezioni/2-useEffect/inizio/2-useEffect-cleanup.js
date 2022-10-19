// import react useState useeffect
import React, {useState, useEffect} from "react";

const CleanUp = () => {
  // size window width use state
  const [size, setSize] = useState(window.innerWidth);

  // change size
  const changeSize = () => (e) => {
    setSize(window.innerWidth);
  }

  // use effect change size
  useEffect(() => {
    // window event listener resize
    window.addEventListener('resize', changeSize());
  }, [])

  return (
    <div className="item shadow justify-content-center">
      {/* size */}
      <h1 className="text-center">{size}</h1>
    </div>
  );
};

export default CleanUp;
