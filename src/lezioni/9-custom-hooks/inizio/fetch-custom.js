import React, { useEffect, useState } from "react";

// import use fetch
import useFetch from "./useFetch";

// import posts
import Posts from "./Posts";

const url = "https://jsonplaceholder.typicode.com/users";


const FetchComponents = () => {
  // data isloading
  const {data, isLoading} =useFetch(url);

  return (
    <div>
      {isLoading ? (
        <h3>Loading....</h3>
      ) : (
        <div>
          {data.map((el) => {
            const { id, name, phone } = el;
            return (
              <div key={id} className="users bg-white p-4 shadow rounded">
                <h3>{name}</h3>
                <h5>{phone}</h5>
              </div>
            );
          })}
        </div>
      )}

      {/* posts */}
      <Posts/>
    </div>
  );
};

export default FetchComponents;
