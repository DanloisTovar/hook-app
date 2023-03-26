export const tareasReducer = (initialState = [], accion) => {
    switch (accion.type) {
        case '[TAREA] add tarea!!!':
            return [...initialState, accion.payload];
            break;
        case '[TAREA] Borrar tarea!!!':
            return initialState.filter((tarea) => tarea.id !== accion.payload);
            break;

        case '[TAREA] Toggle tarea!!!':
            return initialState.map((tarea) => {
                if (tarea.id === accion.payload) {
                    return {
                        ...tarea,
                        done: !tarea.done,
                    };
                } else {
                    return tarea;
                }
            });

            break;
        default:
            return initialState;
    }
    return state;
};
