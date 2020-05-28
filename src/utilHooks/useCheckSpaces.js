import { useContext } from 'react';
import Store from './../contexts/Store';

const useCheckSpaces = () => {
    const { boardArr, dispatch } = useContext(Store);

    // verify stones and alter ***************
    // *****************
    const checkStones = (list) => {
        console.log('list', list);
        list.filter((ele) => {
            if (ele && ele.covered === true && ele.ring === false) {
                flipStone(ele.id);
            }
        });
        return;
    };
    // updates board reducer *****************
    // *****************
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
    // GAME LOGIC
    // is move legal ****************
    // when ring jumps a line of stones it must end its jump on the first free vertice
    // ***********
    const isLegalMove = (cRefs) => {
        const cS = cRefs.spaces;
        if (cS.length > 2) {
            const last = cS[cS.length - 1];
            console.log('last', last);
        }
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
    return { checkSpace, checkStones, isLegalMove };
};

export default useCheckSpaces;
