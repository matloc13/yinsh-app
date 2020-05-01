import React, { useEffect, useContext } from 'react';
import { useRingActions, useHandleStones } from './../utilHooks/index';
import { useDrag } from 'react-dnd';
import Store from './../contexts/Store';

const Ring = ({ color, ringNumber, location }) => {
    const { ring } = useContext(Store);
    const previousIndex = location; // find ring id then find last intem in that ring aray
    const { setActiveRing, resetRing } = useRingActions();
    const [ringData, drag] = useDrag({
        item: { type: 'ring', ringNumber, previousIndex },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
            didDrop: !!monitor.didDrop(),
        }),
        end: (dropResult, monitor) => {
            const { id: droppedId } = monitor.getItem();
            const didDrop = monitor.didDrop();
            if (!didDrop) {
                resetRing(ringNumber);
            }
        },
    });

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
