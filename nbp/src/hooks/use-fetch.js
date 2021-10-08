import {useCallback, useEffect, useState} from "react";

const useFetch = (url) => {

    const [currencies, setCurrencies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchBooksHandler = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(url, {
                headers: {
                    Accept: 'application/json'
                }
            },);
            if (!response.ok) {
                throw new Error('Coś poszło nie tak');
            }

            const data = await response.json();
            setCurrencies(data[0].rates);

        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }, [url]);

    useEffect(() => {
        fetchBooksHandler();
    }, [fetchBooksHandler]);

    return {
        error,
        isLoading,
        currencies
    };
}

export default useFetch;

