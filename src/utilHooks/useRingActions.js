import { useContext } from 'react';
import Store from './../contexts/Store';

const useRingActions = () => {
    const { ring, ring1, ring2, ring3, ring4, ring5, ring6, dispatch } = useContext(Store);
    // console.log('ring', ring);
    // console.log('ring1', ring1);
    // console.log('ring2', ring2);
    // console.log('ring3', ring3);
    // console.log('ring4', ring4);
    // console.log('ring5', ring5);
    // console.log('ring6', ring6);

    const ringVariable = (ring) => {
        const ringIndex = Number(ring.replace('ring', ' '), 10);
        return ringIndex;
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
        const allRings = [ring1, ring2, ring3, ring4, ring5, ring6];
        const curRing = ringVariable(ringID) - 1;
        return dispatch({
            type: `SET_LOCATION_${ringID}`,
            payload: {
                locations: [...allRings[curRing].locations, vertID],
            },
        });
    };

    return { setActiveRing, updateRing };
};

export default useRingActions;
