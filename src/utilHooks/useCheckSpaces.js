import { useContext } from 'react';
import Store from './../contexts/Store';

const useCheckSpaces = () => {
    const { boardArr, dispatch } = useContext(Store);

    const checkStones = (list) => {
        console.log('list', list);
        list.filter((ele) => {
            if (ele && ele.covered === true && ele.ring === false) {
                flipStone(ele.id);
            }
        });
        return;
    };

    const checkSpace = (check) => {
        let newArr = [];
        check.spaces.forEach((ele) => {
            const vertID = `x${ele.x}--y${ele.y}`;
            const bub = boardArr.filter((space) => {
                return space.id === vertID;
            });
            newArr.push(bub[0]);
        });
        dispatch({ type: 'SPACE_ROW', payload: newArr });
        return newArr;
    };

    const determineColor = (stone) => {
        const color = stone.className.replace('vertice-top ', '');
        return color;
    };

    const flipStone = (id) => {
        const stone = document.getElementById(id);
        const color = determineColor(stone);
        return stone.classList.replace(color.toString(), color === 'white' ? 'black' : 'white');
    };
    return { checkSpace, checkStones };
};

export default useCheckSpaces;
