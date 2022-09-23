import React from 'react'; 
import photo from '../../../assets/projects/Christmas_Screenshot.jpg';

function Christmas() {

    return (
        <section>
            <h1>A Curated Christmas</h1>
            <p>A web app that provides users with a way to shop from a curated list of high-end items for everyone on their Christmas list.</p>
        <div>
            <h2>Repo Link</h2>
                <div className='link'>
                    <a href='https://github.com/Ben-Boyte/Holiday-Shop' className='link'>Click Here</a>
                </div>
            <h2>Deployed Link</h2>
                <div className='link'>
                    <a href='https://vanderbiltholidayshop.herokuapp.com/'>Click Here</a>
                </div>
        </div>
        <img className='img' src={photo} style={{ width: '50%' }} alt='A family at Christmas'/>
        </section>
    )
}

export default Christmas; 