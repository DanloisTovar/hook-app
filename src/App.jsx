import React from 'react';

// import componetents:
import {
    CounterApp,
    CounterwithCustomHook,
    SimpleForm,
    Memo,
    MemoHook,
    FormCustomhook,
    MultipleCustomHooks,
    CallbackHook,
} from './components';

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
                <hr />
                <Memo />
                <hr />
                <MemoHook />

                <hr />
                <CallbackHook />
            </div>
        </div>
    );
}

export default App;
