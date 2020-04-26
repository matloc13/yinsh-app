import React, { useEffect, useRef } from 'react';
import { useHandleStones } from './../utilHooks/index';

const Block = ({ space, className }) => {
    // console.log('space', space);
    const { addStone } = useHandleStones();
    const vertRef = useRef();
    const handlePoints = (e) => {
        e.persist();
        // console.log('e', e.target.id);
        vertRef.current.focus();
        addStone(e.target.id);
    };

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
                    <span className={`tri ${className} y${space.y} paint`}>
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
                    <span className={`tri ${className} y${space.y} paint`}>
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
                return <span className={`tri ${className} y${space.y} hidden`}></span>;
            } else if (space.y === 2 || space.y === 18) {
                return (
                    <span className={`tri ${className} y${space.y} paint`}>
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
                    <span className={`tri ${className} y${space.y} paint`}>
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
                    <span className={`tri ${className} y${space.y} paint`}>
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
                    <span className={`tri ${className} y${space.y} paint`}>
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
            <span className={`tri ${className} y${space.y}`}>
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
};

export default Block;
