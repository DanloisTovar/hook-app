export const tareasReducer = (initialState = [], accion) => {
    switch (accion.type) {
        case '[TAREA] add tarea!!!':
            return [...initialState, accion.payload];
            break;
        case '[TAREA] Borrar tarea!!!':
            return initialState.filter((tarea) => tarea.id !== accion.payload);
            break;
        default:
            return initialState;
    }
    return state;
};
