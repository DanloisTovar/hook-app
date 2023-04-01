import { render, screen } from '@testing-library/react';
import { TareaItem } from '../../src/reducers/components';

describe('Testing TareaItem', () => {
    const tarea = {
        id: 1,
        description: 'Piedra del alma',
        done: false,
    };

    const OnDeleteTareaMock = jest.fn();
    const onToggleTareaMock = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Debe de mostrar el componente pendiente por completar!!! ', () => {
        render(
            <TareaItem
                tarea={tarea}
                onToggleTarea={onToggleTareaMock}
                OnDeleteTarea={OnDeleteTareaMock}
            />,
        );

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe(
            'list-group-item d-flex justify-content-between',
        );

        expect(screen.getByRole('button', { target: 'Borrar' }));

        screen.debug();
    });
});
