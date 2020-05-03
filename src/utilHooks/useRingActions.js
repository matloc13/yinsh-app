import { useContext } from 'react';
import Store from './../contexts/Store';
import { useCheckStraightLine, useCheckRingBlocking } from './index';

const useRingActions = () => {
    const { ring, ring1, ring2, ring3, ring4, ring5, ring6, boardArr, dispatch } = useContext(
        Store
    );
    const { result, checkStraightline } = useCheckStraightLine();
    const { checkRingBlocking } = useCheckRingBlocking();
    const allRings = [ring1, ring2, ring3, ring4, ring5, ring6];
    // console.log('ring', ring);
    // console.log('ring1', ring1);
    // console.log('ring2', ring2);
    // console.log('ring3', ring3);
    // console.log('ring4', ring4);
    // console.log('ring5', ring5);
    // console.log('ring6', ring6);

    const resetRing = (rID, previousIndex) => {
        const curRing = ringVariable(rID);
        // const vertID = allRings[curRing].locations[allRings[curRing].locations.length - 1];
        // console.log('vertID', vertID);
        return updateRing(previousIndex, rID);
    };

    const checkNew = (n) => {
        // console.log('boardArr', boardArr);
        let clear = false;
        boardArr.forEach((vert) => {
            if (vert.id === n && vert.covered) {
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
            // console.log('prevVert', prevVert, newVert);
            return true;
        } else if (prevVert && newVert) {
            // console.log('prevVert', prevVert, newVert);
            checkStraightline(v, x, y);

            const ringClear = checkRingBlocking(v, x, y);
            return result === true && ringClear === true ? true : false;
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
        // console.log('vertClear', vertClear);
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

    const updateRing = (vertID, ringID) => {
        const curRing = ringVariable(ringID);
        return dispatch({
            type: `SET_LOCATION_${ringID}`,
            payload: {
                locations: [...allRings[curRing].locations, vertID],
            },
        });
    };

    return { setActiveRing, updateRing, canMove, resetRing, findVerts };
};

export default useRingActions;
