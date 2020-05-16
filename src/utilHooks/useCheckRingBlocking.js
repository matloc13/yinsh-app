import { useState, useEffect } from 'react';
import { useVertObj, useCheckSpaces } from './index';

const useCheckRingBlocking = () => {
    const [vertObj, setVertObj] = useState({});
    const [ringBlocking, setringBlocking] = useState(true);
    const { createVertObj, findDifference, findSpaces } = useVertObj();
    const { checkSpace } = useCheckSpaces();

    useEffect(() => {
        if (vertObj.prevX !== 0) {
            const verify = handleCheck();
            checkRing(verify);
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
        return checkSpace(checkRefs);
    };

    const checkRing = (verify) => {
        if (verify.length > 1) {
            verify.forEach((s) => {
                if (s && s.covered === false && s.ring === false) {
                    setringBlocking(true);
                }
                if ((s && s.covered === true) || (s && s.ring === true)) {
                    return setringBlocking(false);
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
