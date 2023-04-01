import React, { useState } from 'react';
import { useCounter } from '../hooks/useCounter';

export const CounterwithCustomHook = () => {
    const { counter, incrementar, decrementar, reset } = useCounter();
    return (
        <>
            <h1>Counter with CustomHook {counter}</h1>

            <button className="btn btn-primary" onClick={() => incrementar()}>
                {' '}
                Contador + 1{' '}
            </button>

            <button className="btn btn-danger" onClick={() => decrementar()}>
                {' '}
                Contador - 1{' '}
            </button>

            <button className="btn btn-warning" onClick={reset}>
                Reset
            </button>
        </>
    );
};
