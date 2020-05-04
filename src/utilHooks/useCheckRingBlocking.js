import { useState } from 'react';
import { useVertObj } from './index';
const useCheckRingBlocking = () => {
    const [params, setparams] = useState({ v: '', x: 0, y: 0 });
    const [space, setSpace] = useState({ x: 0, y: 0 });
    const [spaces, setSpaces] = useState([{}]);
    const { vertObj } = useVertObj(params.v, params.x, params.y);

    const findDifference = (p, n) => {
        return n - p;
    };
    const findNumberOfSpaces = (xd, yd) => {
        if (xd === 0) {
            return { row: xd, num: yd / 2 - 1 };
        }
    };
    const generateSpaces = (num) => {
        return;
    };
    const checkSpace = () => {
        return;
    };

    const checkRingBlocking = (v, x, y) => {
        setparams({ ...params, v, x, y });
        if (vertObj.prevX !== 0) {
            const xdif = findDifference(vertObj.prevX, vertObj.newX);
            const ydif = findDifference(vertObj.prevY, vertObj.newY);
            console.log('vertObj', vertObj);
            console.log('dif', xdif, ydif);
            const num = findNumberOfSpaces(xdif, ydif);
            generateSpaces(num);
            console.log('num', num);
        }
        /* find all spaces between two vertices
        check if a ring is currently present

        first vertice 
        new vertice 
        find verts inbetween    check distance between rows 

        if      prev x1 y8     new x6 y12
        find dif of rows
        loop number of dif  create vertices in between

        */

        return true;
    };
    return { checkRingBlocking };
};

export default useCheckRingBlocking;
