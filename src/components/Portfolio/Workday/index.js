import React from 'react'; 
import photo from '../../../assets/projects/WorkDay_pic1.png'; 


function Workday() {

    return (
        <section>
            <h1>Work Day Calendar</h1>
            <p>This is a calendar application that allows users to create and save events for each hour throughout the day.</p>
        <div>
            <h2>Repo Link</h2>
                <p>https://github.com/corimest/workday.git</p>
            <h2>Deployed Link</h2>
            <p>https://corimest.github.io/workday/</p>
        </div>
        <img src={photo} style={{ width: '50%' }} alt='workday picture one'/>
        </section>
    )
}

export default Workday; 