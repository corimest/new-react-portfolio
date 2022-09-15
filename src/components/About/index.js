import React from 'react'; 
import coverImage from '../../assets/cover/Screen Shot 2022-06-07 at 8.21.40 PM.png';

function About() {
    return(
        <section>
            <h1 id='about'>About Me</h1>
            <p>I have always been a natural storyteller. 
               During my early career as a writer and an actress, I developed the skills needed to craft a compelling story that resonates with an audience. 
               I now use those same skills as a web developer and digital marketing student to connect businesses with customers, translating their unique brand stories across a global digital marketplace. </p>
            <img src={coverImage} style={{ width: '50%' }} alt='cover'/>
        </section>
    ); 
}

export default About; 