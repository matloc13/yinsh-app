const useVertObj = () => {
    // ******************
    // VERT OBJ **********************
    // **********************

    const createVertObj = (v, x, y) => {
        const reggie = new RegExp(/[x-y]/);
        let prevX;
        let prevY;
        v.split('--').forEach((ele, i) => {
            switch (i) {
                case 0:
                    return (prevX = Number(ele.replace(reggie, ''), 10));

                case 1:
                    return (prevY = Number(ele.replace(reggie, ''), 10));
            }
        });

        return { prevX: prevX, prevY: prevY, newX: x, newY: y };
    };

    // ********************
    // find difference *******************
    // *********************

    const findDifference = (p, n) => {
        return n - p;
    };

    // *******************
    // findEven ******************************
    // *************************

    const findEven = (n) => {
        if (n % 2 === 0) {
            return true;
        }
        return false;
    };

    // *******************
    //  find spaces  between vertices *************
    //*********************

    const findSpaces = (x, y, vertObj) => {
        const spaces = [];

        // horizontal *****************
        // ********************

        if (x === 0) {
            if (y > 1) {
                for (let i = 0; i < y / 2; i++) {
                    spaces.push({ x: vertObj.newX, y: (vertObj.prevY += 2) });
                }
            }
            if (y < -1) {
                for (let i = 0; i > y / 2; i--) {
                    spaces.push({ x: vertObj.newX, y: (vertObj.prevY -= 2) });
                }
            }
        }

        // one row up or down **************
        // *********************
        if (x === 1 || x === -1) {
            for (let i = 0; i < y / 2; i++) {
                spaces.push({ x: vertObj.newX, y: vertObj.newY });
            }
        }

        // top down  to the right *****************
        // *******************

        if (x > 1 && y > 1) {
            if (findEven(vertObj.prevX) === true) {
                for (let i = 0; i < x; i++) {
                    if (findEven(i) === false) {
                        spaces.push({ x: (vertObj.prevX += 1), y: (vertObj.prevY += 0) });
                    } else {
                        spaces.push({ x: (vertObj.prevX += 1), y: (vertObj.prevY += 2) });
                    }
                }
            }
            if (findEven(vertObj.prevX) === false) {
                for (let i = 0; i < x; i++) {
                    if (findEven(i) === true) {
                        spaces.push({ x: (vertObj.prevX += 1), y: (vertObj.prevY += 0) });
                    } else {
                        spaces.push({ x: (vertObj.prevX += 1), y: (vertObj.prevY += 2) });
                    }
                }
            }
        }

        //top down to the left **************
        // ********************

        if (x > 1 && y < -1) {
            if (findEven(vertObj.prevX) === true) {
                for (let i = 0; i < x; i++) {
                    if (findEven(i) === true) {
                        spaces.push({ x: (vertObj.prevX += 1), y: (vertObj.prevY -= 0) });
                    } else {
                        spaces.push({ x: (vertObj.prevX += 1), y: (vertObj.prevY -= 2) });
                    }
                }
            }
            if (findEven(vertObj.prevX) === false) {
                for (let i = 0; i < x; i++) {
                    if (findEven(i) === false) {
                        spaces.push({ x: (vertObj.prevX += 1), y: (vertObj.prevY -= 0) });
                    } else {
                        spaces.push({ x: (vertObj.prevX += 1), y: (vertObj.prevY -= 2) });
                    }
                }
            }
        }

        // up to the left ************
        // *********************

        if (x < -1 && y < -1) {
            if (findEven(vertObj.prevX) === false) {
                for (let i = 0; i > x; i--) {
                    if (findEven(i) === false) {
                        spaces.push({ x: (vertObj.prevX -= 1), y: (vertObj.prevY -= 0) });
                    } else {
                        spaces.push({ x: (vertObj.prevX -= 1), y: (vertObj.prevY -= 2) });
                    }
                }
            }

            if (findEven(vertObj.prevX) === true) {
                for (let i = 0; i > x; i--) {
                    if (findEven(i) === true) {
                        spaces.push({ x: (vertObj.prevX -= 1), y: (vertObj.prevY -= 0) });
                    } else {
                        spaces.push({ x: (vertObj.prevX -= 1), y: (vertObj.prevY -= 2) });
                    }
                }
            }
        }

        // up to the right *******************
        // *******************

        if (x < -1 && y > 1) {
            if (findEven(vertObj.prevX) === false) {
                for (let i = 0; i > x; i--) {
                    if (findEven(i) === true) {
                        spaces.push({ x: (vertObj.prevX -= 1), y: (vertObj.prevY += 0) });
                    } else {
                        spaces.push({ x: (vertObj.prevX -= 1), y: (vertObj.prevY += 2) });
                    }
                }
            }

            if (findEven(vertObj.prevX) === true) {
                for (let i = 0; i > x; i--) {
                    if (findEven(i) === false) {
                        spaces.push({ x: (vertObj.prevX -= 1), y: (vertObj.prevY += 0) });
                    } else {
                        spaces.push({ x: (vertObj.prevX -= 1), y: (vertObj.prevY += 2) });
                    }
                }
            }
        }
        return spaces;
    };

    return { createVertObj, findEven, findDifference, findSpaces };
};

export default useVertObj;
