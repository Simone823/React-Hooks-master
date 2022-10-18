// import react usestate
import React, {useState} from "react";

// Gli Hooks devono essere usasti con use davanti
// componenti devono avere la prima lettere Maiuscola
// Gli Hook devono essere invocati all'interno del corpo/funzione del componente
// Gli Hook non possono essere utilizzati in maniera condizionale

const UsoBase = () => {

  // title and set title usestate
  const [title, setTitle] = useState('Hello!!');

  // titles array
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

    // set title usestate
    setTitle(titles[num_rand]);
  }

  return (
    <React.Fragment>
      {/* title */}
      <h2>{title}</h2>

      {/* btn */}
      <button onClick={changeTitle()} type="button" className="btn btn-info shadow">Cambia titolo</button>
    </React.Fragment>
  );
};

export default UsoBase;
