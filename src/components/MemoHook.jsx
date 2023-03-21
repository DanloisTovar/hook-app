import React, { useState, useMemo } from 'react';
import { useCounter } from '../hooks';

const heavyStuff = (iterador = 100) => {
    for (let i = 0; i < iterador; i++) {
        console.log('Ahi vamos...');
    }

    return `${iterador} iteraciones realizadas!!!`;
};

export const MemoHook = () => {
    const { counter, incrementar, decrementar } = useCounter(4000);

    const [show, setShow] = useState(true);

    const valorMemorizado = useMemo(() => heavyStuff(counter), [counter]);

    return (
        <>
            <h1>
                Counter : <small>{counter}</small>
            </h1>

            <h4>{valorMemorizado}</h4>
            <button className="btn btn-primary" onClick={() => incrementar()}>
                {' '}
                Sumar
            </button>
            <button className="btn btn-primary" onClick={() => decrementar()}>
                {' '}
                Restar
            </button>

            <button className="btn btn-primary" onClick={() => setShow(!show)}>
                {' '}
                Show {JSON.stringify(show)}
            </button>
        </>
    );
};
