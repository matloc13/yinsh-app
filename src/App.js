import React, { useState } from 'react';
import { Block, Grid, Triangle } from './components/index';
import './App.scss';

const App = () => {
    // const [grid, setgrid] = useState({ height: 10, width: 10, triangle: 1 });
    return (
        <div className="App">
            <Grid />
        </div>
    );
};

export default App;
