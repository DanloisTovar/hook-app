import React from 'react';

// import componetents:
/* import {
    CounterApp,
    CounterwithCustomHook,
    SimpleForm,
    Memo,
    MemoHook,
    FormCustomhook,
    MultipleCustomHooks,
    CallbackHook,
    Reducers,
} from './components'; */

import { Main } from '../useContext/Main';

function App() {
    return (
        <div className="App">
            <div>
                {/*  <h1>Practica hooks!</h1>
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
                <CallbackHook /> */}

                <Main />
            </div>
        </div>
    );
}

export default App;
