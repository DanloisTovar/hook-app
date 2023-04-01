import React, { useCallback, useState, useEffect } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
    const [counter, setCounter] = useState(0);

    const incrementarPadre = useCallback((value) => {
        setCounter((c) => c + value);
    }, []);

    /*   useEffect(() => {
        incrementarPadre();
    }, [incrementarPadre]); */

    return (
        <>
            <h1>useCallbac kHook: {counter} </h1>

            {<ShowIncrement increment={incrementarPadre} />}
        </>
    );
};
