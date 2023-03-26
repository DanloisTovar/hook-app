import React from 'react';

// !componentes:
import { TareaItem } from './TareaItem';

export const Tarealist = ({ tarea = [], OnDeleteTarea, onToggleTarea }) => {
    return (
        <>
            <ul className="list-group">
                {tarea.map((tarea) => {
                    return (
                        <TareaItem
                            {...tarea}
                            key={tarea.id}
                            OnDeleteTarea={OnDeleteTarea}
                            onToggleTarea={onToggleTarea}
                        />
                    );
                })}
            </ul>
        </>
    );
};

{
}
