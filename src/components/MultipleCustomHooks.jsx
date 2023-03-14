import React from 'react';
import { useFetch, useCounter } from '../hooks';
import { IsLoardingQuote, Quote } from './';

export const MultipleCustomHooks = () => {
    const { counter, incrementar, decrementar, reset } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(
        `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`,
    );
    const { author, quote } = !!data && data[0];

    return (
        <>
            {isLoading ? (
                <IsLoardingQuote />
            ) : (
                <Quote
                    author={author}
                    quote={quote}
                    incrementar={incrementar}
                />
            )}
            <button
                disabled={isLoading}
                className="btn btn-primary"
                onClick={() => incrementar()}
            >
                Siguiente
            </button>
        </>
    );
};
