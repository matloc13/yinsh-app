import React from 'react';
import { Stone } from './../components/index';

const currentStoneFace = () => {
    return;
};
const useHandleStones = () => {
    const addStone = (id) => {
        const stone = document.getElementById(id);
        const color = currentStoneFace();
        stone.classList.add('white');
        // stone.append(<Stone color={'black'} />);
    };
    return { addStone };
};

export default useHandleStones;
