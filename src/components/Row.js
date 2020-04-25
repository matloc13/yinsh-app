import React from 'react';
import { Block } from './index';

const Row = ({ rowName, i }) => {
    console.log('rowName', rowName);

    return (
        <section className="row">
            {rowName &&
                rowName.map((space, i) => {
                    return <Block space={space} key={i} />;
                })}
        </section>
    );
};

export default Row;
