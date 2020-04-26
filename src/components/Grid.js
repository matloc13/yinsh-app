import React, { Fragment, useEffect, useState } from 'react';
import { Ring, Row } from './index';
import { useAssembleBoard } from './../utilHooks/index';

const Grid = () => {
    const initboard = [];
    const [gameboard, setGameboard] = useState(initboard);
    const { buildBoard } = useAssembleBoard();

    useEffect(() => {
        let board = buildBoard(12);
        if (board) {
            console.log('board', board);
            setGameboard({ ...gameboard, board });
        }
    }, []);

    // console.log('gameboard', gameboard);
    return (
        <main className="grid">
            {gameboard.board &&
                gameboard.board.row.map((row, i) => {
                    return <Row key={i} rowName={row} />;
                })}
            <Ring />
        </main>
    );
};

export default Grid;
