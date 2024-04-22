import { useState, useEffect } from "react";

const useFetch = (url, token) => {
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) {
            return;
        }
        const abortCont = new AbortController();
        const options = {
            signal: abortCont.signal,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        if (token) {
            options.headers['Authorization'] = `Bearer ${token}`;
        }

        fetch(url, options)
        .then(res => {
            if (!res.ok) {
                throw Error('Data could not be fetched');
            }
            return res.json();
        })
        .then(data => {
            setData(data);
            setPending(false);
            setError(null);
        })
        .catch(err => {
            if (err.name === 'AbortError') {
                console.log('fetch aborted');
            } else {
                setPending(false);
                setError(err.message);
            }
        });

        return () => abortCont.abort();

    }, [url, token]); 

    return { data, pending, error };
}

export default useFetch;