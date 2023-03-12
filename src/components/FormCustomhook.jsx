import React, { useEffect } from 'react';
import { useForm } from '../hooks/useForm';

export const FormCustomhook = () => {
    const {
        formState,
        username,
        email,
        password,
        onInputChange,
        onResetValueForm,
    } = useForm({
        username: '',
        email: '',
        password: '',
    });

    /*  const { username, email, password } = formState; */

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

            <input
                type="password"
                className="form-control mt-3"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button
                className="btn btn-primary mt-3 mb-5"
                onClick={onResetValueForm}
            >
                Reset Form
            </button>

            <hr />
        </div>
    );
};
