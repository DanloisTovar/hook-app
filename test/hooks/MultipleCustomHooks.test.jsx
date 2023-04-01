import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/components';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

// Jest Mock!:

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('MultipleCustomHooks test!!', () => {
    const MockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        incrementar: MockIncrement,
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Debe de mostrar el componente por defecto! ', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null,
        });
        render(<MultipleCustomHooks />);

        /*  screen.debug(); */
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText('BreakingBad Quotes'));

        const nextButton = screen.getByRole('button', { name: 'Siguiente' });

        console.log(nextButton.disabled);
        expect(nextButton.disabled).toBeTruthy();
    });

    test('Debe de mostrar un quote! ', () => {
        useFetch.mockReturnValue({
            data: [
                {
                    author: 'Danlois Tovar!!',
                    quote: 'El que aspira llega lejos!',
                },
            ],
            isLoading: false,
            hasError: null,
        });
        render(<MultipleCustomHooks />);
        /*         screen.debug(); */

        expect(screen.getByText('Danlois Tovar!!'));
        expect(screen.getByText('El que aspira llega lejos!'));

        const nextButton = screen.getByRole('button', { name: 'Siguiente' });
        expect(nextButton.disabled).toBeFalsy();
    });

    test('Debe de llamar la funcion de incrementar! ', () => {
        useFetch.mockReturnValue({
            data: [
                {
                    author: 'Danlois Tovar!!',
                    quote: 'El que aspira llega lejos!',
                },
            ],
            isLoading: false,
            hasError: null,
        });

        render(<MultipleCustomHooks />);

        const nextButton = screen.getByRole('button', { name: 'Siguiente' });
        fireEvent.click(nextButton);
        screen.debug();

        expect(MockIncrement).toHaveBeenCalled();
    });
});
