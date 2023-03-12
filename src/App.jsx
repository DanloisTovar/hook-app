import React from 'react';

// import componetents:
import { CounterApp, CounterwithCustomHook, SimpleForm } from './components';
import { FormCustomhook } from './components/FormCustomhook';
import { MultipleCustomHooks } from './components/MultipleCustomHooks';

function App() {
    return (
        <div className="App">
            <div>
                <h1>Practica hooks!</h1>
                <hr />
                <CounterApp />
                <hr />
                <CounterwithCustomHook />
                <hr />
                <SimpleForm />
                <FormCustomhook />

                <MultipleCustomHooks />
            </div>
        </div>
    );
}

export default App;
