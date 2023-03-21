import React, { useState } from 'react';
import { useCounter } from '../hooks';
import { Small } from './Small';

export const Memo = () => {
    const { counter, incrementar, decrementar } = useCounter();

    const [show, setShow] = useState(true);

    return (
        <>
            <h1>
                Counter : <Small value={counter} />
            </h1>
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
