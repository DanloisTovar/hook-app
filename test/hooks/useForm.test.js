import { renderHook, act } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';

describe('testing UseForm!!', () => {
    test('Debe de regresar los valores pordefecto! ', () => {
        const initialForm = {
            name: 'Danlois Tovar',
            email: 'danlois.tovar@gmail.com',
        };
        const { result } = renderHook(() => useForm(initialForm));

        const {} = result.current;

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetValueForm: expect.any(Function),
        });
    });

    test('Debe de Cambiar el nombre del formulario ', () => {
        const initialForm = {
            name: 'Danlois Tovar',
            email: 'danlois.tovar@gmail.com',
        };
        const { result } = renderHook(() => useForm());

        const { onInputChange } = result.current;

        const event = {
            target: {
                name: 'name',
                value: 'Virginia',
            },
        };

        act(() => {
            onInputChange(event);
        });

        expect(result.current.value).toBe(result.current.value);
        expect(result.current.formState.name).toBe(
            result.current.formState.name,
        );

        console.log(result.current);
        console.log(result.current.formState.name);
    });

    test('Debe de Resetear el nombre del formulario ', () => {
        const initialForm = {
            name: 'Danlois Tovar',
            email: 'danlois.tovar@gmail.com',
        };
        const { result } = renderHook(() => useForm());

        const { onInputChange, onResetValueForm } = result.current;

        const event = {
            target: {
                name: 'name',
                value: 'Virginia',
            },
        };

        act(() => {
            onInputChange(event);
            onResetValueForm(event);
        });

        expect(result.current.value).toBe(result.current.value);
        expect(result.current.formState.name).toBe(
            result.current.formState.name,
        );

        console.log(result.current.value);
        console.log(result.current.formState.name);
    });
});
