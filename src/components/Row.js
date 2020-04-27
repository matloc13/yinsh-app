import React from 'react';
import { Block, Ring } from './index';

const Row = ({ rowName }) => {
    // console.log('rowName', rowName);

    // const hide = rowName.filter((space) => {
    //     space.y;
    // });

    return (
        <section className="row">
            {rowName &&
                rowName.map((space, i) => {
                    return i % 2 === 0 ? (
                        <Block space={space} key={i} className="triangle-down" />
                    ) : (
                        <Block space={space} key={i} className="triangle-up" />
                    );
                })}
        </section>
    );
};

export default Row;
