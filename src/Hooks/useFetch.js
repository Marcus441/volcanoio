import { useState, useEffect } from "react";
import useAuthToken from "./useAuthToken";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(null);

    const token = useAuthToken();

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

        setPending(true);

        fetch(url, options)
            .then(res => {
                if (!res.ok) {

                    switch (res.status) {
                        case 200:
                            return res;
                        case 401:
                            throw Error('Unauthorized');
                        case 404:
                            throw Error('Not Found');
                        case 409:
                            throw Error('User already exists');
                        default:
                            throw Error('Internal Server Error');
                    }
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