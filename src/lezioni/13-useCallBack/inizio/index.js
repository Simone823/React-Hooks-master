import React, { useState, useMemo, useCallback } from "react";
import useFetch from "../../9-custom-hooks/risultato/useFetch";
const url = "https://api.github.com/users";
const trovaMaggiore = (array) => {
  return array.reduce((total, item) => {
    if (item.id > total) {
      total = item.id;
    }
    return total;
  }, 0);
};
const Index = () => {
  const { data } = useFetch(url);
  const [contatore, setContatore] = useState(0);

  const [banned, setBanned] = useState(0);

  const addBanned = useCallback(() => {
    setBanned(banned + 1);
  }, [banned])

  console.log(banned);

  useMemo(() => trovaMaggiore(data), [data]);
  return (
    <>
      <div style={{ width: "fit-content", margin: "auto" }}>
        <button
          className="btn btn-info"
          onClick={() => setContatore(contatore + 1)}
        >
          Aggiungi
        </button>
        <h4>{contatore}</h4>
      </div>
      <div style={{ width: "fit-content", margin: "auto" }}>
        {data.map((el) => {
          return <Elenco key={el.id} {...el} addBanned={addBanned}/>;
        })}
      </div>
    </>
  );
};

const Elenco = React.memo(({ avatar_url: image, login: name, addBanned }) => {
  console.log("item");
  return (
    <article className="card bg-white my-3 shadow-sm">
      <img
        src={image}
        alt={name}
        className="img my-3"
        style={{ width: "30%", borderRadius: "50%", margin: "auto" }}
      />
      <h4>{name}</h4>
      <button onClick={addBanned} type="button" className="btn btn-danger">Banna</button>
    </article>
  );
});

export default Index;
