import { tareasReducer } from '../../src/reducers/reducer';

describe('testing usereducer', () => {
    const initialState = [
        {
            id: 1,
            description: 'Debo hacer una tarea!',
            done: false,
        },
    ];

    test('Debe regresar el estado inicial! ', () => {
        const state = tareasReducer(initialState, {});
        expect(state).toBe(initialState);
    });

    test('Debe agregar una tarea! ', () => {
        const accion = {
            type: '[TAREA] add tarea!!!',
            payload: {
                id: 2,
                description: 'Debo hacer otra tarea!',
            },
        };

        const state = tareasReducer(initialState, accion);

        expect(state.length).toBe(2);
        expect(state).toContain(accion.payload);
    });

    test('Debe eliminar una tarea! ', () => {
        const accion = {
            type: '[TAREA] Borrar tarea!!!',
            payload: 2,
        };

        const state = tareasReducer(initialState, accion);

        expect(state.length).toBe(1);
        expect(state).not.toContain(accion.payload);
    });

    test('Debe cambiar el toggle una tarea! ', () => {
        const accion = {
            type: '[TAREA] Toggle tarea!!!',
            payload: 1,
        };

        const state = tareasReducer(initialState, accion);

        expect(state.length).toBe(1);
        expect(state[0].done).toBe(true);
    });
});
