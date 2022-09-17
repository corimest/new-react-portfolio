import React from 'react'; 
import photo from '../../../assets/projects/weather_pic.png';

function Weather() {

    return (
        <section>
            <h1>Weather Dashboard</h1>
            <p>A weather dashboard that runs in the browser, featuring dynamically update HTMl and CSS, and using OpenWeather One Call API.</p>
        <div>
            <h2>Repo Link</h2>
                <div className='link'>
                    <a href='https://github.com/corimest/weather-dashboard'>Click Here</a>
                </div>
            <h2>Deployed Link</h2>
                <div className='link'>
                    <a href='https://corimest.github.io/weather-dashboard/'>Click Here</a>
                </div>
        </div>
        <img className='img' src={photo} style={{ width: '50%' }} alt='weather dashboard picture one'/>
        </section>
    )
}

export default Weather; 