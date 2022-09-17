import React from 'react'; 
import photo from '../../../assets/projects/Note_Taker_pic.png';

function Note() {

    return (
        <section>
            <h1>Note Taker</h1>
            <p>The Note Taker application allows users to be able to write and save notes so they can organize their lives.</p>
        <div>
            <h2>Repo Link</h2>
                <a href='https://github.com/corimest/Note_Taker'>Click Here</a>
            <h2>Deployed Link</h2>
                <a href='https://corimest.github.io/Note_Taker/'>Click Here</a>
        </div>
        <img src={photo} style={{ width: '50%' }} alt='notes taker picture'/>
        </section>
    )
}

export default Note; 