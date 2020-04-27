import React, { useEffect, useState, useContext } from 'react';
import { useDrag } from 'react-dnd';
import Store from './../contexts/Store';

const Ring = ({ currentPoint, player, ringNumber }) => {
    const { ring, dispatch } = useContext(Store);
    const [collected, drag] = useDrag({
        item: { type: 'ring', id: ringNumber },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    console.log('collectd', collected);
    const [pos, setpos] = useState({ top: 20, right: 'unset', bottom: 'unset', left: 'unset' });
    useEffect(() => {
        setpos({ ...pos, currentPoint });
        return () => {};
    }, []);
    return (
        <div
            ref={drag}
            id={ringNumber}
            className={`ring`}
            style={{
                position: 'absolute',
                top: `${pos.top}`,
                right: `${pos.right}`,
                bottom: `${pos.bottom}`,
                left: `${pos.left}`,
                width: '24px',
                height: '24px',
                border: '3px solid black',
                borderRadius: '50%',
                backgroundColor: 'transparent',
            }}
        ></div>
    );
};

export default Ring;
