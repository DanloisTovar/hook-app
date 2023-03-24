import React from 'react';

export const TareaItem = ({ id, description, OnDeleteTarea }) => {
    return (
        <>
            <li className="list-group-item d-flex justify-content-between">
                <span className="align-self-center">{description}</span>
                <button
                    className="btn btn-danger"
                    onClick={() => OnDeleteTarea(id)}
                >
                    Borrar
                </button>
            </li>
        </>
    );
};
