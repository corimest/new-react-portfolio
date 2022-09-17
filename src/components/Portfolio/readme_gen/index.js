import React from 'react'; 
import photo from '../../../assets/projects/readme_pic.png';

function Read() {

    return (
        <section>
            <h1>README Generator</h1>
            <p>Provides a quick and easy way for developers to create a professional README file for their new projects.</p>
        <div>
            <h2>Repo Link</h2>
                <a href='https://github.com/corimest/README_generator'>Click Here</a>
            <h2>Deployed Link</h2>
            <p>In order to install, you will need to download to code to a local machine. You will need to have Node JS installed as well as Inquirer.</p>
        </div>
        <img src={photo} style={{ width: '50%' }} alt='Read Me Generator picture'/>
        </section>
    )
}

export default Read; 