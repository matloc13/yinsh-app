import { useContext } from 'react';
import { useRingActions } from './index';
import Store from './../contexts/Store';

const useHandleStones = () => {
    const { boardArr, dispatch } = useContext(Store);
    const { updateRing } = useRingActions();
    // console.log('boardArray', boardArr);

    // add new stone

    const addStone = (id, color) => {
        const stone = document.getElementById(id);
        stone.classList.add(color);
        coverBoardSpace(id);
    };

    const coverBoardSpace = (id) => {
        const s = boardArr.filter((arr) => arr.id !== id);
        const newArr = [...s, { id: id, covered: true }];
        dispatch({ type: 'COVER_VERT', payload: newArr });
    };

    // move and update ring location

    const moveRing = (rID, x, y, color) => {
        const ring = document.getElementById(rID);
        const vertID = `x${x}--y${y}`;
        const vert = document.getElementById(vertID);
        vert.append(ring);
        addStone(vertID, color);
        updateRing(vertID, rID);
    };

    const determineColor = (id) => {
        const stone = document.getElementById(id);
        const list = stone.className;
        const color = list.replace('vertice-top', ' ');
        return color;
    };

    const flipStone = (id) => {
        const stone = document.getElementById(id);
        const color = determineColor(id);

        switch (color) {
            case 'white':
                return stone.classList.replace('white', 'black');
            case 'black':
                return stone.classList.replace('black', 'white');
        }
    };

    return { flipStone, moveRing, determineColor };
};

export default useHandleStones;
