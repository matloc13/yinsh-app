import React, { useState, useContext } from 'react';

const Player = () => {
    const { ring1, ring2, ring3, ring4, ring5, ring6, boardArr, dispatch } = useContext(Store);
    const allRings = [ring1, ring2, ring3, ring4, ring5, ring6];
    const [player, setPlayer] = useState({
        name: 'player',
        turn: false,
    });

    useEffect(() => {
        if (ring1 || ring2 || ring3) {
            console.log('ring1', ring1);
            setPlayer({ ...player, turn: true });
        }
        return () => {};
    }, [ring1, ring2, ring3, ring4, ring5, ring6]);

    return <div>player1</div>;
};

export default Player;
