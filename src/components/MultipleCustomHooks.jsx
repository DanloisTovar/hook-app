import React from 'react';
/* import { useFetch } from '../hooks/useFetch'; */
import { useFetch, useCounter } from '../hooks';

export const MultipleCustomHooks = () => {
    const { counter, incrementar, decrementar, reset } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(
        `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`,
    );
    const { author, quote } = !!data && data[0];

    return (
        <div>
            {isLoading ? (
                <>
                    <h1>BreakingBad Quotes</h1>
                    <div className="alert alert-info text-center">
                        <h1>Cargando...</h1>
                    </div>
                </>
            ) : (
                <>
                    <h1>BreakingBad Quotes</h1>
                    <div className="blockquote text-end">
                        <p className="mb-1">{quote}</p>

                        <footer className="blockquote-footer mt-5">
                            {author}
                        </footer>
                    </div>

                    <button
                        disabled={isLoading}
                        className="btn btn-primary"
                        onClick={() => incrementar()}
                    >
                        Siguiente
                    </button>
                </>
            )}
        </div>
    );
};
