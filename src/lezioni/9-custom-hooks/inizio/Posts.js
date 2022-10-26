import React from 'react'

// import use fetch
import useFetch from './useFetch';

const postUrl = "https://jsonplaceholder.typicode.com/posts";

function Posts() {

    // is loading data
    const {data, isLoading} = useFetch(postUrl);

    return (
        <div>
        {isLoading ? (
            <h3>Loading....</h3>
        ) : (
            <div>
            {data.map((el) => {
                const { id, title, body } = el;
                return (
                <div key={id} className="users bg-white p-4 shadow rounded">
                    <h3>{title}</h3>
                    <p>{body}</p>
                </div>
                );
            })}
            </div>
        )}
        </div>
    )
}

export default Posts