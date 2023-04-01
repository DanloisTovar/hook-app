import React, { useState } from 'react';

export const CounterApp = () => {
    // !hooks:
    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    // !desestructura el state_
    const { counter1, counter2, counter3 } = counter;

    console.log(counter1, counter2, counter3);
    return (
        <>
            <h1>Counter1: {counter1}</h1>
            <h1>Counter2: {counter2}</h1>
            <h1>Counter3: {counter3}</h1>

            <button
                className="btn btn-primary"
                onClick={() =>
                    setCounter({ ...counter, counter1: counter1 + 1 })
                }
            >
                {' '}
                Contador + 1{' '}
            </button>

            <button
                className="btn btn-danger"
                onClick={() =>
                    setCounter({ ...counter, counter2: counter2 + 1 })
                }
            >
                {' '}
                Contador + 1{' '}
            </button>

            <button
                className="btn btn-warning"
                onClick={() =>
                    setCounter({ ...counter, counter3: counter3 + 1 })
                }
            >
                {' '}
                Contador + 1{' '}
            </button>
        </>
    );
};
