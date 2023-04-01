const initialState = [
    {
        id: 1,
        tarea: 'Recolectar las piedras del Alma!',
        done: false,
    },
];
const nuevaTarea = {
    id: 2,
    tarea: 'Recolectar las piedras del del Poder',
    done: false,
};

const tareasReducer = (state = initialState, action = {}) => {
    if (action?.type === '[TAREA]: Agregar a lista de tareas') {
        return [...state, action.payload];
    }
    return state;
};

let todos = tareasReducer();

console.log(todos);

const tareaAccion = {
    type: '[TAREA]: Agregar a lista de tareas',
    payload: nuevaTarea,
};

todos = tareasReducer(todos, tareaAccion);

console.log({ state: todos });
