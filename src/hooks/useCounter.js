import React, { useState } from 'react';

export const useCounter = (valorInicial = 0) => {
    // !hooks:
    const [counter, setCounter] = useState(valorInicial);

    const incrementar = (valor = 1) => {
        setCounter(counter + valor);
    };
    const decrementar = (valor = 1) => {
        if (counter === 0) return;
        setCounter(counter - valor);
    };
    const reset = () => {
        setCounter(valorInicial);
    };

    return { counter, incrementar, decrementar, reset };
};
