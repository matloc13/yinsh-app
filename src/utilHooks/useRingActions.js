import { useContext } from 'react';
import Store from './../contexts/Store';
import { useCheckStraightLine } from './index';

const useRingActions = () => {
    const { ring, ring1, ring2, ring3, ring4, ring5, ring6, boardArr, dispatch } = useContext(
        Store
    );
    const { checkStraightline } = useCheckStraightLine();
    const allRings = [ring1, ring2, ring3, ring4, ring5, ring6];
    // console.log('ring', ring);
    // console.log('ring1', ring1);
    // console.log('ring2', ring2);
    // console.log('ring3', ring3);
    // console.log('ring4', ring4);
    // console.log('ring5', ring5);
    // console.log('ring6', ring6);

    const checkNew = (n) => {
        console.log('boardArr', boardArr);
        const result = boardArr.forEach((vert) => {
            if (vert.id === n && vert.covered) {
                return false;
            } else if (vert.id === n && vert.covered === false) {
                return true;
            }
        });
        return result;
    };

    const checkPrev = (last) => {
        if (last.includes('offBoard')) {
            return true;
        }
        return last;
    };

    const checkVertStones = async (v, x, y) => {
        try {
            const prevVert = await checkPrev(v.last);
            const newVert = await checkNew(v.newVert);
            if (prevVert === true && newVert) {
                return true;
            }
            const validate = checkStraightline(v, x, y);
        } catch (error) {
            console.error(error);
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
        const vertCovered = checkVertStones(verts, x, y);

        /* 
       func one-  find previous vert of current ring , 
       func 2  - is new vert covered?       ( true  cannot move else can move)
       func 3  - is new vert in a straightline from previous vert?
        func 4- is there a ring between previous vert and new vert?
        
        CHECK stones on route,  
        ??????????
        - is stone in path of ring?    ( true flip stone )
    
    */
        // console.log('newVertID', newVertID);
        return true;
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

    return { setActiveRing, updateRing, canMove };
};

export default useRingActions;
