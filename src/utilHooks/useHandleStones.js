import { useContext } from 'react';
import { useRingActions } from './index';
import Store from './../contexts/Store';

const useHandleStones = () => {
    const { boardArr, dispatch } = useContext(Store);
    const { updateRing } = useRingActions();

    // add new stone

    const addStone = (id, color) => {
        const stone = document.getElementById(id);
        stone.classList.add(color);
        coverBoardSpace(id);
    };

    const coverBoardSpace = (id) => {
        const s = boardArr.filter((arr) => arr.id !== id);
        const newArr = [...s, { id: id, covered: true, ring: true }];
        dispatch({ type: 'COVER_VERT', payload: newArr });
    };

    const addToLast = (rID, vertID) => {
        dispatch({
            type: 'SET_LAST',
            payload: {
                name: rID,
                vert: vertID,
            },
        });
    };

    // move and update ring location

    const moveRing = (rID, x, y, color) => {
        const ring = document.getElementById(rID);
        const vertID = `x${x}--y${y}`;
        const vert = document.getElementById(vertID);
        vert.append(ring);
        addStone(vertID, color);
        updateRing(vertID, rID);
        addToLast(rID, vertID);
    };

    return { moveRing };
};

export default useHandleStones;
