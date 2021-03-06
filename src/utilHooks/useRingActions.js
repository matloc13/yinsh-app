import { useContext } from 'react';
import Store from './../contexts/Store';
import { useCheckStraightLine, useCheckRingBlocking } from './index';

const useRingActions = () => {
    const { ring1, ring2, ring3, ring4, ring5, ring6, boardArr, dispatch } = useContext(Store);
    const { result, checkStraightline } = useCheckStraightLine();
    const { checkRingBlocking } = useCheckRingBlocking();
    const allRings = [ring1, ring2, ring3, ring4, ring5, ring6];

    const resetRing = (rID, previousIndex) => {
        return updateRing(previousIndex, rID);
    };

    const checkNew = (n) => {
        let clear = false;
        boardArr.forEach((vert) => {
            if (vert.id === n && vert.covered === true) {
                clear = false;
                return;
            } else if (vert.id === n && vert.covered === false) {
                clear = true;
                return;
            }
        });
        return clear;
    };

    const checkPrev = (last) => {
        if (last.includes('offBoard')) {
            return true;
        } else {
            return last;
        }
    };

    const checkVertStones = (v, x, y) => {
        const prevVert = checkPrev(v.last);
        const newVert = checkNew(v.newVert);

        if (prevVert === true && newVert) {
            return true;
        } else if (prevVert && newVert) {
            checkStraightline(v, x, y);
            if (result === true) {
                const ringClear = checkRingBlocking(v.last, x, y);
                return ringClear === true ? true : false;
            } else {
                return false;
            }
        }
    };

    const setSpace = (rID) => {
        const ringLocation = allRings[ringVariable(rID)].locations;
        const prevLoc = ringLocation[ringLocation.length - 2];
        console.log('object', prevLoc);
        if (ringLocation.length > 2) {
            const s = boardArr.filter((arr) => arr.id !== prevLoc);
            const newArr = [...s, { id: prevLoc, covered: true, ring: false }];
            dispatch({ type: 'SET_SPACE', payload: newArr });
        }
    };

    const findVerts = (rID, newVert) => {
        const prev = allRings[ringVariable(rID)].locations;
        const last = prev[prev.length - 1];
        return { last, newVert };
    };

    const canMove = (rID, x, y, color) => {
        const newVertID = `x${x}--y${y}`;
        const verts = findVerts(rID, newVertID);
        const vertClear = checkVertStones(verts, x, y);
        if (!vertClear === true) {
            return false;
        }
        return true;
        /* 
        func 4- is there a ring between previous vert and new vert?

        CHECK stones on route,  
        ??????????
        - is stone in path of ring?    ( true flip stone )
        */
    };

    const ringVariable = (ring) => {
        const ringIndex = Number(ring.replace('ring', ' '), 10);
        return ringIndex - 1;
    };

    const setActiveRing = (e, color) => {
        return dispatch({
            type: 'IS_RING',
            payload: {
                current: e.target.id,
                color: color,
            },
        });
    };

    const updateRing = async (vertID, ringID) => {
        const curRing = ringVariable(ringID);
        return dispatch({
            type: `SET_LOCATION_${ringID}`,
            payload: {
                locations: [...allRings[curRing].locations, vertID],
            },
        });
    };

    return { setActiveRing, updateRing, canMove, resetRing, findVerts, setSpace };
};

export default useRingActions;
