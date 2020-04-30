import { useRingActions } from './index';

const useHandleStones = () => {
    const { updateRing } = useRingActions();

    // add new stone

    const addStone = (id, color) => {
        const stone = document.getElementById(id);
        stone.classList.add(color);
    };

    const moveRing = (rID, x, y, color) => {
        const ring = document.getElementById(rID);
        const vertID = `x${x}--y${y}`;
        const vert = document.getElementById(vertID);
        updateRing(vertID, rID);
        addStone(vertID, color);
        vert.append(ring);
    };

    const determineColor = (id) => {
        const stone = document.getElementById(id);
        const list = stone.className;
        const color = list.replace('vertice-top', ' ');
        return color;
    };

    const flipStone = (id) => {
        const stone = document.getElementById(id);
        const color = determineColor(id);

        switch (color) {
            case 'white':
                return stone.classList.replace('white', 'black');
            case 'black':
                return stone.classList.replace('black', 'white');
        }
    };

    return { flipStone, moveRing, determineColor };
};

export default useHandleStones;
