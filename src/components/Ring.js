import React from 'react';
const Ring = ({ color, currentPoint, player, ringNumber }) => {
    return <div id={ringNumber} className={`ring ${color}`}></div>;
};

export default Ring;
