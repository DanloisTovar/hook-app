import React, { useReducer } from 'react';

// !components:
import { Tarealist, FormTarea } from '../reducers/components/';

// !reducer:
import { tareasReducer } from '../reducers/reducer';

// !initial state:

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recoletar la  piedra del alma',
        done: false,
    },
    {
        id: new Date().getTime() * (2 + 1),
        description: 'Recoletar la  piedra del Poder',
        done: false,
    },

    {
        id: new Date().getTime() * (2 + 4),
        description: 'Recoletar la  piedra del juicio',
        done: false,
    },
];

export const Reducers = () => {
    const [tareaState, dispatch] = useReducer(tareasReducer, initialState);

    const handlenewtarea = (tarea) => {
        console.log({ tarea });
    };
    return (
        <>
            <h1>
                App Tareas: (10), <small>pendientes: (2)</small>
            </h1>

            <div className="row">
                <div className="col-7">
                    <Tarealist tarea={tareaState} />
                </div>
                <div className="col-5">
                    <h4>Agregar Tarea</h4>
                    <hr />

                    <FormTarea onNewTarea={handlenewtarea} />
                </div>
            </div>
        </>
    );
};
