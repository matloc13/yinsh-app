import React, { useEffect, useContext } from 'react';
import { useRingActions, useCheckSpaces } from './../utilHooks/index';
import { useDrag } from 'react-dnd';
import Store from './../contexts/Store';

const Ring = ({ color, ringNumber }) => {
    const { ring, spaceRow } = useContext(Store);
    const { setActiveRing, findVerts, resetRing, setSpace } = useRingActions();
    const { checkStones } = useCheckSpaces();

    const previousIndex = findVerts(ringNumber, '').last;

    const [ringData, drag] = useDrag({
        item: { type: 'ring', ringNumber, previousIndex },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
            didDrop: !!monitor.didDrop(),
            dropResult: !!monitor.getDropResult(),
        }),
        end: (dropResult, monitor) => {
            // console.log('dropResult', dropResult);
            const didDrop = monitor.didDrop();

            // console.log('didDrop', didDrop);
            if (!didDrop) {
                resetRing(ringNumber, previousIndex);
            }
        },
    });

    const { isDragging, didDrop } = ringData;

    useEffect(() => {
        if (didDrop) {
            if (ring.current === ringNumber) {
                const ringNow = document.getElementById(ringNumber);
                ringNow.classList.add('onBoard');
                checkStones(spaceRow);
                setSpace(ring.current);
            }
        }
        return () => {};
    }, [didDrop]); //eslint-disable-line

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
