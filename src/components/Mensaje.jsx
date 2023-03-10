import React, { useEffect, useState } from 'react';

export const Mensaje = ({ resultado }) => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const onMouseMove = ({ x, y }) => {
            // const coords = { x, y };
            /* console.log({ x, y }); */
            setCoords({ x, y });
        };

        window.addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return (
        <>
            <h4>Mensaje:</h4>
            {resultado ? <p>{resultado}</p> : <p>Usuario "No" existe</p>}
            {<p>Coordenadas: {JSON.stringify(coords)}</p>}
        </>
    );
};
