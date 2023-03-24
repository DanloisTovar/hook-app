import React, { useEffect, useReducer } from 'react';

// !components:
import { Tarealist, FormTarea } from '../reducers/components/';

// !reducer:
import { tareasReducer } from '../reducers/reducer';

// !initial state:

const initialState = [
    /*  {
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
    }, */
];

const init = () => {
    return JSON.parse(localStorage.getItem('tareas')) || [];
};

export const Reducers = () => {
    const [tareaState, dispatch] = useReducer(
        tareasReducer,
        initialState,
        init,
    );

    useEffect(() => {
        localStorage.setItem('tareas', JSON.stringify(tareaState));
    }, [tareaState]);

    const handlenewtarea = (tarea) => {
        const accion = {
            type: '[TAREA] add tarea!!!',
            payload: tarea,
        };
        dispatch(accion);
    };

    const handleDeletetarea = (id) => {
        dispatch({
            type: '[TAREA] Borrar tarea!!!',
            payload: id,
        });
    };
    return (
        <>
            <h1>
                App Tareas: (10), <small>pendientes: (2)</small>
            </h1>

            <div className="row">
                <div className="col-7">
                    <Tarealist
                        tarea={tareaState}
                        OnDeleteTarea={handleDeletetarea}
                    />
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
