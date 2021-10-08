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

    // let content = <p>Nie znaleziono żadnych walut.</p>;

    // if (currencies.length > 0) {
    //     content = <CurrenciesList currencies={currencies}/>;
    // }

    // if (error) {
    //     content = <p>{error}</p>;
    // }
    //
    // if (isLoading) {
    //     content = <p>Ładuję...</p>;
    // }

    return {
        error,
        isLoading,
        currencies
    };
}

export default useFetch;

