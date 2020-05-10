import { useState, useEffect } from 'react';
import { useVertObj } from './index';
const useCheckRingBlocking = () => {
    const [vertObj, setVertObj] = useState({});
    const [spaces, setSpaces] = useState([]);
    const { createVertObj, findDifference, findSpaces } = useVertObj();

    useEffect(() => {
        console.log('vertObj', vertObj);
        if (vertObj.prevX !== 0) {
            handleCheck();
        }
        return () => {};
    }, [vertObj]);

    const handleCheck = () => {
        const check = {
            xdif: findDifference(vertObj.prevX, vertObj.newX),
            ydif: findDifference(vertObj.prevY, vertObj.newY),
            spaces: findSpaces(
                findDifference(vertObj.prevX, vertObj.newX),
                findDifference(vertObj.prevY, vertObj.newY),
                vertObj
            ),
        };
        console.log('check', check);
        return;
    };

    const checkSpace = () => {
        return;
    };

    const checkRingBlocking = (v, x, y, vN) => {
        // console.log('v,x,y', v, x, y, vN);
        const obj = createVertObj(v, x, y);
        setVertObj({ ...obj });

        // setparams({ ...params, v, x, y });

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
