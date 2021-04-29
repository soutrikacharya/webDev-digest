import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);


    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
        .then(res => {
            return res.json();
        })
        .then(data => {
            setData(data);
            setIsPending(false);
        });

        return () => abortCont.abort();
    }, [url]);

    return { data, isPending };
}

export default useFetch;