import React from 'react'; 
import coverImage from '../../assets/cover/Screen Shot 2022-06-07 at 8.21.40 PM.png';

function About() {
    return(
        <section>
            <h1 id='about'>About Me</h1>
            <img src={coverImage} style={{ width: '50%' }} alt='cover'/>
        </section>
    ); 
}

export default About; 