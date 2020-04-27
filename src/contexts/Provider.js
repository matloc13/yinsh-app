import React, { useReducer } from 'react';
import App from './../App';
import Store from './Store';
import { ringReducer } from './../reducers/index';
import { ringState } from './initStates';

const Provider = () => {
    const [ring, dispatchRing] = useReducer(ringReducer, ringState);

    const dispatch = (action) => {
        [dispatchRing].forEach((fn) => {
            fn(action);
        });
    };

    return (
        <Store.Provider value={(ring, dispatch)}>
            <App />
        </Store.Provider>
    );
};

export default Provider;
