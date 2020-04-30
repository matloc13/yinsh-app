import React, { useEffect, useContext } from 'react';
import { useRingActions } from './../utilHooks/index';
import { useDrag } from 'react-dnd';
import Store from './../contexts/Store';

const Ring = ({ color, ringNumber, location }) => {
    const { ring } = useContext(Store);
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

    // const [pos, setpos] = useState({ top: '', left: '' });

    useEffect(() => {
        if (didDrop) {
            if (ring.current === ringNumber) {
                const ringNow = document.getElementById(ringNumber);
                ringNow.classList.add('onBoard');
            }
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
                border: `3px solid ${color}`,

                boxShadow: ` 0 0 8px  ${isDragging ? 'green' : 'transparent'} `,
            }}
        ></div>
    );
};

export default Ring;
