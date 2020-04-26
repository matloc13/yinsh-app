import React, { useEffect, useRef } from 'react';

const Block = ({ space, className }) => {
    // console.log('space', space);
    const blockRef = useRef();
    const vertRef = useRef();

    const handlePoints = (e) => {
        e.persist();
        console.log('e', e);
        vertRef.current.focus();

        // console.log('click', click);
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
            if (space.y === 1 || space.y === 2 || space.y === 20) {
                return <span className={`tri ${className} y${space.y} hidden`}></span>;
            }
        }
        if (space.x === 6) {
            if (space.y === 1 || space.y === 19 || space.y === 20) {
                return <span className={`tri ${className} y${space.y} hidden`}></span>;
            }
        }
        if (space.x === 7) {
            if (space.y === 1 || space.y === 2 || space.y === 20) {
                return <span className={`tri ${className} y${space.y} hidden`}></span>;
            }
        }

        if (space.x === 8) {
            if (
                space.y === 1 ||
                space.y === 2 ||
                space.y === 18 ||
                space.y === 19 ||
                space.y === 20
            ) {
                return <span className={`tri ${className} y${space.y} hidden`}></span>;
            }
        }

        if (space.x === 9) {
            if (
                space.y === 1 ||
                space.y === 2 ||
                space.y === 3 ||
                space.y === 4 ||
                space.y === 18 ||
                space.y === 19 ||
                space.y === 20
            ) {
                return <span className={`tri ${className} y${space.y} hidden`}></span>;
            }
        }

        if (space.x === 10) {
            if (
                space.y === 1 ||
                space.y === 2 ||
                space.y === 3 ||
                space.y === 4 ||
                space.y === 5 ||
                space.y === 6 ||
                space.y === 14 ||
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

        return (
            <span className={`tri ${className} y${space.y}`}>
                {className.includes('triangle-up') ? (
                    <>
                        <button
                            ref={vertRef}
                            className="vertice-top"
                            onClick={handlePoints}
                        ></button>
                    </>
                ) : (
                    <>
                        <span
                            ref={vertRef}
                            className="vertice-bottom"
                            onClick={handlePoints}
                        ></span>
                    </>
                )}
            </span>
        );
    }
};

export default Block;
