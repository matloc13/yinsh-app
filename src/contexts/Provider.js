import React, { useReducer, useEffect } from 'react';
import App from './../App';
import Store from './Store';
import {
    ringState,
    ringsState,
    ring1State,
    ring2State,
    ring3State,
    ring4State,
    ring5State,
    ring6State,
    boardArray,
    spaceRowState,
    ringsLast,
} from './initStates';
import {
    ringReducer,
    ringsReducer,
    ring1Reducer,
    ring2Reducer,
    ring3Reducer,
    ring4Reducer,
    ring5Reducer,
    ring6Reducer,
    boardVerReducer,
    spaceRowReducer,
    ringlastReducer,
} from './reducers/index';

const Provider = () => {
    const [ring, dispatchRing] = useReducer(ringReducer, ringState);
    const [rings, dispatchRings] = useReducer(ringsReducer, ringsState);
    const [ring1, dispatchRing1] = useReducer(ring1Reducer, ring1State);
    const [ring2, dispatchRing2] = useReducer(ring2Reducer, ring2State);
    const [ring3, dispatchRing3] = useReducer(ring3Reducer, ring3State);
    const [ring4, dispatchRing4] = useReducer(ring4Reducer, ring4State);
    const [ring5, dispatchRing5] = useReducer(ring5Reducer, ring5State);
    const [ring6, dispatchRing6] = useReducer(ring6Reducer, ring6State);
    const [boardArr, dispatchBoardArr] = useReducer(boardVerReducer, boardArray);
    const [spaceRow, dispatchSpaceRow] = useReducer(spaceRowReducer, spaceRowState);
    const [ringLast, dispatchRingsLast] = useReducer(ringlastReducer, ringsLast);

    const dispatch = (action) => {
        [
            dispatchRing,
            dispatchRings,
            dispatchRing1,
            dispatchRing2,
            dispatchRing3,
            dispatchRing4,
            dispatchRing5,
            dispatchRing6,
            dispatchBoardArr,
            dispatchSpaceRow,
            dispatchRingsLast,
        ].forEach((fn) => {
            fn(action);
        });
    };
    useEffect(() => {
        // console.log('ring1', ring1);
        return () => {};
    }, [ring1]);

    return (
        <Store.Provider
            value={{
                ring,
                rings,
                ring1,
                ring2,
                ring3,
                ring4,
                ring5,
                ring6,
                boardArr,
                spaceRow,
                ringLast,
                dispatch,
            }}
        >
            <App />
        </Store.Provider>
    );
};

export default Provider;
