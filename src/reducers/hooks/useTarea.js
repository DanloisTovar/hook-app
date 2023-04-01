// !reducer:
import { useEffect, useReducer } from 'react';
import { tareasReducer } from '../reducer';

const init = () => {
    return JSON.parse(localStorage.getItem('tareas')) || [];
};

export const useTarea = () => {
    // !initial state:

    const [tareaState, dispatch] = useReducer(tareasReducer, [], init);

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

    const handleToggleTarea = (id) => {
        dispatch({
            type: '[TAREA] Toggle tarea!!!',
            payload: id,
        });
    };

    return {
        tareaState,
        handlenewtarea,
        handleDeletetarea,
        handleToggleTarea,
        tareasContar: tareaState.length,
        tareasPendientes: tareaState.filter((tareas) => !tareas.done).length,
    };
};
