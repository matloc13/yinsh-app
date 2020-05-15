import { useState, useEffect } from 'react';
import { useVertObj, useCheckSpaces } from './index';
const useCheckRingBlocking = () => {
    const [vertObj, setVertObj] = useState({});
    // const [ringBlocking, setringBlocking] = useState(false);
    const { createVertObj, findDifference, findSpaces } = useVertObj();
    const { checkSpace } = useCheckSpaces();

    useEffect(() => {
        if (vertObj.prevX !== 0) {
            handleCheck();
        }
        return () => {};
    }, [vertObj]); //eslint-disable-line

    const handleCheck = () => {
        const checkRefs = {
            xdif: findDifference(vertObj.prevX, vertObj.newX),
            ydif: findDifference(vertObj.prevY, vertObj.newY),
            spaces: findSpaces(
                findDifference(vertObj.prevX, vertObj.newX),
                findDifference(vertObj.prevY, vertObj.newY),
                vertObj
            ),
        };
        checkSpace(checkRefs);
        return;
    };

    const checkRingBlocking = (v, x, y) => {
        const obj = createVertObj(v, x, y);
        setVertObj({ ...obj });

        /* 
        check -find all spaces between two vertices
        awaiting -check if a ring is currently in the way
        */

        return true;
    };
    return { checkRingBlocking };
};

export default useCheckRingBlocking;
