// import react use ref
import React, {useRef} from "react";

const RefExample = () => {
  // ref 
  const ref = useRef(null);

  // handle click scroll
  const handleScroll = () => {
    // if ref null
    if(ref === null) {
      return;
    }

    // ref current scroll in to view
    ref.current.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
  }

  return (
    <div>
      <h1>Use Ref</h1>
      <div
        className="my-5 mx-auto"
        style={{
          height: "100vh",
        }}
      >
        <button onClick={handleScroll} className="btn btn-info">Scroll</button>
      </div>

      <div
        style={{
          height: "100vh",
        }}
      ></div>

      <h2 ref={ref}>Testo Testo</h2>
      <div
        style={{
          height: "30vh",
        }}
      ></div>
    </div>
  );
};

export default RefExample;
