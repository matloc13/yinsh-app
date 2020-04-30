import React, { useEffect, useState, useContext } from 'react';
import { Row, offBoard, Ring } from './index';
import Store from './../contexts/Store';
import { useAssembleBoard } from './../utilHooks/index';
import Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

const Grid = () => {
    const initboard = [];
    const { ring, rings } = useContext(Store);
    const [gameboard, setGameboard] = useState(initboard);
    const { buildBoard } = useAssembleBoard();

    useEffect(() => {
        let board = buildBoard(12);
        if (board) {
            console.log('board', board);
            setGameboard({ ...gameboard, board });
        }
    }, []);

    // console.log('ring.current', ring.current);
    return (
        <DndProvider backend={Backend}>
            <main className="grid">
                {gameboard.board &&
                    gameboard.board.row.map((row, i) => {
                        return <Row key={i} rowName={row} />;
                    })}
                {rings &&
                    rings.rings.map((piece, i) => (
                        <Ring
                            key={piece.ringid + i}
                            color={piece.color}
                            ringNumber={piece.ringid}
                        />
                    ))}
            </main>
        </DndProvider>
    );
};

export default Grid;
