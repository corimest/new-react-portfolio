import React from 'react'; 
import photo from '../../../assets/projects/WorkDay_pic1.png'; 


function Workday() {

    return (
        <section>
            <h1>Work Day Calendar</h1>
            <p>This is a calendar application that allows users to create and save events for each hour throughout the day.</p>
        <div>
            <h2>Repo Link</h2>
                <div className='link'>
                    <a href='https://github.com/corimest/workday.git'>Click Here</a>
                </div>
            <h2>Deployed Link</h2>
                <div className='link'>
                    <a href='https://corimest.github.io/workday/'>Click Here</a>
                </div>
        </div>
        <img className='img' src={photo} style={{ width: '50%' }} alt='workday picture one'/>
        </section>
    )
}

export default Workday; 