const useAssembleBoard = () => {
    const buildBoard = (multi) => {
        let row = [];
        for (let i = 1; i < multi; i++) {
            row.push([]);
            for (let j = 1; j < multi + 9; j++) {
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
    return { buildBoard };
};

export default useAssembleBoard;
