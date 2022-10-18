// import react
import React from "react";
//Far vedere che il componente non si riaggiorna ma la variabile si
//Spiegare che cosa è un React Fragment e che è possibile abbreviarlo

// errore base
const ErroreBase = () => {
  // title
  let title = 'Hello!';

  // title array
  const titles = [
    'Nuovo titolo 1',
    'Nuovo titolo 2',
    'Nuovo titolo 3',
    'Nuovo titolo 4'
  ];

  // change title on click
  const changeTitle = () => (e) => {
    // number random
    const num_rand = Math.floor(Math.random() * titles.length);

    // change title
    title = titles[num_rand];

    alert(title);
  }

  return (
    <React.Fragment>
      {/* title */}
      <h2 className="mb-4">{title}</h2>

      {/* btn */}
      <button className="btn btn-info" onClick={changeTitle()}>Cambia titolo</button>
    </React.Fragment>
  );
};

// export errore base
export default ErroreBase;
