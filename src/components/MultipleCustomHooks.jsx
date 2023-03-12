import React from 'react';
import { useFetch } from '../hooks/useFetch';

export const MultipleCustomHooks = () => {
    const { data, isLoading, hasError } = useFetch(
        'https://api.breakingbadquotes.xyz/v1/quotes/1 ',
    );

    // !desestructurar api:

    const { quote, author } = !!data && data[0];

    console.log(data);
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

                    <button className="btn btn-primary">Siguiente</button>
                </>
            )}
        </div>
    );
};
