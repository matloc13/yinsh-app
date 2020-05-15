import React, { useRef, useContext } from 'react';
import { useHandleStones, useRingActions } from './../utilHooks/index';
import { useDrop } from 'react-dnd';
import Store from './../contexts/Store';

const Block = ({ space, className }) => {
    const { ring, rings, spaceRow } = useContext(Store);
    const { moveRing } = useHandleStones(rings);
    const { canMove } = useRingActions();

    const [ringData, drop] = useDrop({
        accept: 'ring',
        canDrop: () => canMove(ring.current, space.x, space.y, ring.color),
        drop: () => moveRing(ring.current, space.x, space.y, ring.color),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
            getDropResult: !!monitor.getDropResult(),
        }),
    });

    const { isOver, canDrop } = ringData;
    if (isOver) {
        // console.log('isOver, canDrop', isOver, canDrop);
    }

    const vertRef = useRef();
    const handlePoints = (e) => {
        e.persist();
        let now = vertRef.current;
        now.focus();
    };

    // **************
    // ROWS         *******************
    // ******************

    {
        if (space.x === 1) {
            if (
                space.y === 1 ||
                space.y === 2 ||
                space.y === 3 ||
                space.y === 4 ||
                space.y === 5 ||
                space.y === 6 ||
                space.y === 7 ||
                space.y === 15 ||
                space.y === 16 ||
                space.y === 17 ||
                space.y === 18 ||
                space.y === 19 ||
                space.y === 20
            ) {
                return <span className={`tri ${className} y${space.y} hidden`}></span>;
            }
        }
        if (space.x === 2) {
            if (
                space.y === 1 ||
                space.y === 2 ||
                space.y === 3 ||
                space.y === 17 ||
                space.y === 18 ||
                space.y === 19 ||
                space.y === 20
            ) {
                return <span className={`tri ${className} y${space.y} hidden`}></span>;
            }
        }
        if (space.x === 3) {
            if (
                space.y === 1 ||
                space.y === 2 ||
                space.y === 3 ||
                space.y === 19 ||
                space.y === 20
            ) {
                return <span className={`tri ${className} y${space.y} hidden`}></span>;
            }
        }
        if (space.x === 4) {
            if (space.y === 1 || space.y === 19 || space.y === 20) {
                return <span className={`tri ${className} y${space.y} hidden`}></span>;
            }
        }
        if (space.x === 5) {
            if (space.y === 1) {
                return <span className={`tri ${className} y${space.y} hidden`}></span>;
            } else if (space.y === 2 || space.y === 20) {
                return (
                    <span ref={drop} className={`tri ${className} y${space.y} paint`}>
                        {className.includes('triangle-up') && (
                            <>
                                <button
                                    id={`x${space.x}--y${space.y}`}
                                    ref={vertRef}
                                    className="vertice-top"
                                    onClick={handlePoints}
                                ></button>
                            </>
                        )}
                    </span>
                );
            }
        }
        if (space.x === 6) {
            if (space.y === 1 || space.y === 19 || space.y === 20) {
                return <span className={`tri ${className} y${space.y} hidden`}></span>;
            }
        }
        if (space.x === 7) {
            if (space.y === 1) {
                return <span className={`tri ${className} y${space.y} hidden`}></span>;
            } else if (space.y === 2 || space.y === 20) {
                return (
                    <span ref={drop} className={`tri ${className} y${space.y} paint`}>
                        {className.includes('triangle-up') && (
                            <>
                                <button
                                    id={`x${space.x}--y${space.y}`}
                                    ref={vertRef}
                                    className="vertice-top"
                                    onClick={handlePoints}
                                ></button>
                            </>
                        )}
                    </span>
                );
            }
        }

        if (space.x === 8) {
            if (space.y === 1 || space.y === 19 || space.y === 20) {
                return <span ref={drop} className={`tri ${className} y${space.y} hidden`}></span>;
            } else if (space.y === 2 || space.y === 18) {
                return (
                    <span ref={drop} className={`tri ${className} y${space.y} paint`}>
                        {className.includes('triangle-up') && (
                            <>
                                <button
                                    id={`x${space.x}--y${space.y}`}
                                    ref={vertRef}
                                    className="vertice-top"
                                    onClick={handlePoints}
                                ></button>
                            </>
                        )}
                    </span>
                );
            }
        }

        if (space.x === 9) {
            if (
                space.y === 1 ||
                space.y === 2 ||
                space.y === 3 ||
                space.y === 19 ||
                space.y === 20
            ) {
                return <span className={`tri ${className} y${space.y} hidden`}></span>;
            } else if (space.y === 4 || space.y === 18) {
                return (
                    <span ref={drop} className={`tri ${className} y${space.y} paint`}>
                        {className.includes('triangle-up') && (
                            <>
                                <button
                                    id={`x${space.x}--y${space.y}`}
                                    ref={vertRef}
                                    className="vertice-top"
                                    onClick={handlePoints}
                                ></button>
                            </>
                        )}
                    </span>
                );
            }
        }

        if (space.x === 10) {
            if (
                space.y === 1 ||
                space.y === 2 ||
                space.y === 3 ||
                space.y === 5 ||
                space.y === 15 ||
                space.y === 17 ||
                space.y === 18 ||
                space.y === 19 ||
                space.y === 20
            ) {
                return <span className={`tri ${className} y${space.y} hidden`}></span>;
            } else if (space.y === 4 || space.y === 6 || space.y === 14 || space.y === 16) {
                return (
                    <span ref={drop} className={`tri ${className} y${space.y} paint`}>
                        {className.includes('triangle-up') && (
                            <>
                                <button
                                    id={`x${space.x}--y${space.y}`}
                                    ref={vertRef}
                                    className="vertice-top"
                                    onClick={handlePoints}
                                ></button>
                            </>
                        )}
                    </span>
                );
            }
        }

        if (space.x === 11) {
            if (
                space.y === 1 ||
                space.y === 2 ||
                space.y === 3 ||
                space.y === 4 ||
                space.y === 5 ||
                space.y === 6 ||
                space.y === 7 ||
                space.y === 9 ||
                space.y === 11 ||
                space.y === 13 ||
                space.y === 15 ||
                space.y === 16 ||
                space.y === 17 ||
                space.y === 18 ||
                space.y === 19 ||
                space.y === 20
            ) {
                return <span className={`tri ${className} y${space.y} hidden`}></span>;
            } else if (space.y === 8 || space.y === 10 || space.y === 12 || space.y === 14) {
                return (
                    <span ref={drop} className={`tri ${className} y${space.y} paint`}>
                        {className.includes('triangle-up') && (
                            <>
                                <button
                                    id={`x${space.x}--y${space.y}`}
                                    ref={vertRef}
                                    className="vertice-top"
                                    onClick={handlePoints}
                                ></button>
                            </>
                        )}
                    </span>
                );
            }
        }

        return (
            <span ref={drop} className={`tri ${className} y${space.y}`}>
                {className.includes('triangle-up') && (
                    <>
                        <button
                            id={`x${space.x}--y${space.y}`}
                            ref={vertRef}
                            className="vertice-top"
                            onClick={handlePoints}
                        >
                            {/* {space.y} */}
                        </button>
                    </>
                )}
            </span>
        );
    }
};

export default Block;
