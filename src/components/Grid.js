import React, { useEffect, useState } from 'react';
import { Ring, Row } from './index';
import { useAssembleBoard } from './../utilHooks/index';
import Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

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
        <DndProvider backend={Backend}>
            <main className="grid">
                {gameboard.board &&
                    gameboard.board.row.map((row, i) => {
                        return <Row key={i} rowName={row} />;
                    })}
                <Ring player={'one'} ringNumber={`ring1`} />
            </main>
        </DndProvider>
    );
};

export default Grid;
