// import React from 'react';
// import { Stone } from './../components/index';

const useHandleStones = () => {
    const addStone = (id) => {
        const stone = document.getElementById(id);
        const color = currentStoneFace();
        stone.classList.add('white');
        // stone.append(<Stone color={'black'} />);
    };

    const moveRing = (rID, x, y) => {
        const ring = document.getElementById(rID);
        console.log('ring', ring);
    };

    const currentStoneFace = () => {
        return;
    };

    return { addStone, moveRing };
};

export default useHandleStones;
