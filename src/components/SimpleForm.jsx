import React, { useEffect, useState } from 'react';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'danlois',
        email: 'danlois.tovar@gmail.com',
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    useEffect(() => {
        console.log('useEffet called');
    }, []);

    useEffect(() => {
        console.log('form change');
    }, [formState]);

    useEffect(() => {
        console.log('email change');
    }, [email]);

    return (
        <div>
            <h1>Formulario simple</h1>

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            {/* email */}

            <input
                type="email"
                className="form-control mt-3"
                placeholder="email"
                name="email"
                value={email}
                onChange={onInputChange}
            />
        </div>
    );
};
