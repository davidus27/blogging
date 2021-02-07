import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortFetch = new AbortController();
        setTimeout(() => {
            fetch(url, {signal: abortFetch.signal})
                .then(resp => {
                    if(!resp.ok) {
                        throw Error("could not fetch the data");
                    }
                    return resp.json()
                })
                .then(data => {
                    setData(data);
                    setPending(false);
                    setError(null);
                })
                .catch(err => {
                    if(err.name === "AbortError") console.log("fetch aborted");
                    else {
                        setError(err.message);
                        setPending(false);
                    }
                });
            }, 2000);
        return () => abortFetch.abort();
    }, [url]);
    return [data, isPending, error, setData];
}

export default useFetch;