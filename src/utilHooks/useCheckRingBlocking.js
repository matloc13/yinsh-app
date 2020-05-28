import { useState, useEffect } from 'react';
import { useVertObj, useCheckSpaces } from './index';

const useCheckRingBlocking = () => {
    const [vertObj, setVertObj] = useState({});
    const [ringBlocking, setringBlocking] = useState(false);
    const { createVertObj, findDifference, findSpaces } = useVertObj();
    const { checkSpace, isLegalMove } = useCheckSpaces();

    useEffect(() => {
        if (vertObj.prevX !== 0) {
            const verify = handleCheck();
            checkRing(verify);
        }
        return () => {};
    }, [vertObj]); //eslint-disable-line

    // creates an array of vertices from the projected endpoint
    // *****************
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
        isLegalMove(checkRefs);
        return checkSpace(checkRefs);
    };
    // GAME LOGIC
    // is threre a ring in the way?
    const checkRing = (verify) => {
        if (verify.length > 1) {
            verify.forEach((s) => {
                if ((s && s.ring === true) || (s && s.covered === true)) {
                    return setringBlocking(false);
                }
                if (s && s.covered === false && s.ring === false) {
                    setringBlocking(true);
                }
            });
        }
    };

    const checkRingBlocking = (v, x, y) => {
        const obj = createVertObj(v, x, y);
        setVertObj({ ...obj });

        return ringBlocking;
    };

    return { checkRingBlocking };
};

export default useCheckRingBlocking;
