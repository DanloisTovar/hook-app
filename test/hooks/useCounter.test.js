import { renderHook, act } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('useCounter prueba!', () => {
    test('Debe de retornar los valores por defecto! ', () => {
        const { result } = renderHook(() => useCounter());

        const { incrementar, decrementar, reset, counter } = result.current;
        console.log(counter);

        expect(counter).toBe(0);
        expect(incrementar).toEqual(expect.any(Function));
        expect(decrementar).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test('Debe de tener el counter en 100! ', () => {
        const { result } = renderHook(() => useCounter(100));

        const { counter } = result.current;

        expect(counter).toBe(100);
    });

    test('Debe de incrementar el contador ', () => {
        const { result } = renderHook(() => useCounter(100));

        const { counter, incrementar } = result.current;

        act(() => {
            incrementar();
        });

        expect(result.current.counter).toBe(101);

        console.log(result.current.counter);
    });

    test('Debe de decrementar el contador ', () => {
        const { result } = renderHook(() => useCounter(100));

        const { counter, decrementar } = result.current;

        act(() => {
            decrementar();
        });

        expect(result.current.counter).toBe(99);

        console.log(result.current.counter);
    });

    test('Debe resetear el contador ', () => {
        const { result } = renderHook(() => useCounter(100));

        const { counter, reset } = result.current;

        act(() => {
            reset();
        });
        console.log(result.current.counter);
        expect(result.current.counter).toBe(100);
    });
});
