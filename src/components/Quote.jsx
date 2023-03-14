import React from 'react';

export const Quote = ({ author, quote }) => {
    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <div className="blockquote text-end">
                <p className="mb-1">{quote}</p>

                <footer className="blockquote-footer mt-5">{author}</footer>
            </div>
        </>
    );
};
