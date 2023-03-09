import React from 'react';

// import componetents:
import { CounterApp, CounterwithCustomHook, SimpleForm } from './components';

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
            </div>
        </div>
    );
}

export default App;
