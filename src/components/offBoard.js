import React from 'react';
import { Spot } from './index';

const offBoard = () => {
    const array = ['one', 'two', 'three', 'four', 'five', 'six'];

    return;
    {
        array.map((ele, i) => <Spot key={i} item={ele} />);
    }
};

export default offBoard;
