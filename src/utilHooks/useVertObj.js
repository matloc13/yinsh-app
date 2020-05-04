import { useState, useEffect } from 'react';

const useVertObj = (v, x, y) => {
    const [vertObj, setVertObj] = useState({
        prevX: 0,
        prevY: 0,
        newX: 0,
        newY: 0,
    });

    useEffect(() => {
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
        setVertObj({ ...vertObj, prevX: prevX, prevY: prevY, newX: x, newY: y });
        return () => {};
    }, [v, x, y]);

    return { vertObj };
};

export default useVertObj;
