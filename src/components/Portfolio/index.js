import React from 'react'; 
import Cats from './Cats';
import Note from './Note_Taker';
import Workday from './Workday';
import Weather from './Weather';
import Read from './readme_gen';
import Run from './Run';
import Christmas from './Christmas';

function Portfolio() {

    return (
        <section id='portfolio'>
            <Workday></Workday>
            <Cats></Cats>
            <Christmas></Christmas>
            <Note></Note>
            <Weather></Weather>
            <Read></Read>
            <Run></Run>
        </section>
    );
}

export default Portfolio; 