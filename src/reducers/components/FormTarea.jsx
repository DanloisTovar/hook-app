import React from 'react';
import { useForm } from '../hooks';

export const FormTarea = ({ onNewTarea }) => {
    const { description, formState, onInputChange, onResetValueForm } = useForm(
        {
            description: '',
        },
    );

    const onNewSubmit = (event) => {
        event.preventDefault();

        if (description.length <= 1) return;
        const newTarea = {
            id: new Date().getTime(),
            description: description,
            done: false,
        };

        onNewTarea(newTarea);

        onResetValueForm(newTarea);
    };
    return (
        <>
            <form onSubmit={onNewSubmit}>
                <input
                    type="text"
                    placeholder="Que hay que hacer..."
                    className="form-control"
                    name="description"
                    value={description}
                    onChange={onInputChange}
                />

                <button
                    className="btn btn-outline-primary mt-3 btn-block"
                    type="submit"
                >
                    Agregar
                </button>
            </form>
        </>
    );
};
