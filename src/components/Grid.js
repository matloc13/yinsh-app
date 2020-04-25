import React, { Fragment, useEffect, useState } from 'react';
import { Block, Row, Triangle } from './index';

const Grid = () => {
    const initboard = [];
    const [gameboard, setGameboard] = useState(initboard);

    useEffect(() => {
        let board = buildBoard(11);
        if (board) {
            console.log('board', board);
            setGameboard({ ...gameboard, board });
        }
    }, []);

    const buildBoard = (multi) => {
        let row = [];
        for (let i = 1; i < multi; i++) {
            row.push([]);
            for (let j = 1; j < multi; j++) {
                let block = { x: i, y: j };
                if (block.x === i) {
                    row[i - 1].push(block);
                }
            }
        }
        if (row.length > 9) {
            return { row };
        }
    };
    console.log('gameboard', gameboard);
    return (
        <main className="grid">
            {gameboard.board &&
                gameboard.board.row.map((row, i) => {
                    return <Row key={i} rowName={row} i={i} />;
                })}
        </main>
    );
};

export default Grid;
