import { useEffect, useState } from 'react';

export const useFetch = (url) => {
    const [stateUrl, setStateUrl] = useState({
        data: 'null',
        isLoading: true,
        hasError: 'null',
    });
    const getFtech = async () => {
        setStateUrl({
            ...stateUrl,
            isLoading: true,
        });
        const resp = await fetch(url);
        const data = await resp.json();

        setStateUrl({
            data,
            isLoading: false,
            hasError: 'null',
        });
    };
    useEffect(() => {
        getFtech();
    }, [url]);

    return {
        data: stateUrl.data,
        isLoading: stateUrl.isLoading,
        hasError: stateUrl.hasError,
    };
};
