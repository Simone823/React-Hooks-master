import {useEffect, useState} from 'react';

import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                console.log(error);
            }

            setIsLoading(false);
        })();
    }, [url]);

    return {isLoading, data}
}

export default useFetch;