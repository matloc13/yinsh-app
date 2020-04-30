import React, { useEffect, useState } from 'react';
import { useRingActions } from './../utilHooks/index';
import { useDrag } from 'react-dnd';

const Ring = ({ color, ringNumber, location }) => {
    const previousIndex = location; // find ring id then find last intem in that ring aray
    const [ringData, drag] = useDrag({
        item: { type: 'ring', ringNumber, previousIndex },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
            didDrop: !!monitor.getDropResult(),
        }),
    });

    const { setActiveRing } = useRingActions();
    const { isDragging, didDrop } = ringData;

    // console.log('ringData', ringData);

    const [pos, setpos] = useState({ top: '', left: '' });
    // console.log('drag', drag);

    useEffect(() => {
        if (didDrop) {
            setpos({ ...pos, top: -12, left: -12 });
        }
        return () => {};
    }, [didDrop]);

    return (
        <div
            ref={drag}
            id={ringNumber}
            className={`ring ${ringNumber}`}
            onMouseOver={(e) => setActiveRing(e, color)}
            style={{
                position: 'absolute',
                top: `${pos.top}px`,
                left: `${pos.left}px`,
                width: '24px',
                height: '24px',
                border: `3px solid ${color}`,
                borderRadius: '50%',
                backgroundColor: 'transparent',
                zIndex: 4,
                boxShadow: ` 0 0 8px  ${isDragging ? 'green' : 'transparent'} `,
            }}
        ></div>
    );
};

export default Ring;
