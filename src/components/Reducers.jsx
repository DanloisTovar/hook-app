import React, { useEffect, useReducer } from 'react';

// !components:
import { Tarealist, FormTarea } from '../reducers/components/';

// !hooks:
import { useTarea } from '../reducers/hooks';

export const Reducers = () => {
    // !useTarea:

    const {
        tareaState,
        handlenewtarea,
        handleDeletetarea,
        handleToggleTarea,
        tareasContar,
        tareasPendientes,
    } = useTarea();
    return (
        <>
            <h1>
                App Tareas: {tareasContar},{' '}
                <small>pendientes: {tareasPendientes}</small>
            </h1>

            <div className="row">
                <div className="col-7">
                    <Tarealist
                        tarea={tareaState}
                        OnDeleteTarea={handleDeletetarea}
                        onToggleTarea={handleToggleTarea}
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
