import React, { useReducer } from 'react';

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
        id: new Date().getTime() * 3,
        description: 'Recoletar la  piedra del Poder',
        done: false,
    },
];

export const Reducers = () => {
    const [tareaState, dispatch] = useReducer(tareasReducer, initialState);
    return (
        <>
            <h1>
                App Tareas: (10), <small>pendientes: (2)</small>
            </h1>

            <div className="row">
                <div className="col-7">
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between">
                            <span className="align-self-center">Tarea 1</span>
                            <button className="btn btn-danger">Borrar</button>
                        </li>
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar Tarea</h4>
                    <hr />
                    <form>
                        <input
                            type="text"
                            placeholder="Que hay que hacer..."
                            className="form-control"
                        />
                        <button
                            className="btn btn-outline-primary mt-3 btn-block"
                            type="submit"
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};
