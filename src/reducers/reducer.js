export const tareasReducer = (initialState = [], accion) => {
    switch (accion.type) {
        case '[TAREA] add tarea!!!':
            return [...initialState, accion.payload];
            break;

        default:
            return initialState;
    }
    return state;
};
