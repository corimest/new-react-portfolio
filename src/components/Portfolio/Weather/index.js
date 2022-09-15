import React from 'react'; 
import photo from '../../../assets/projects/weather_pic.png';

function Weather() {

    return (
        <section>
            <h1>Weather Dashboard</h1>
            <p>A weather dashboard that runs in the browser, featuring dynamically update HTMl and CSS, and using OpenWeather One Call API.</p>
        <div>
            <h2>Repo Link</h2>
                <p>https://github.com/corimest/weather-dashboard</p>
            <h2>Deployed Link</h2>
            <p>https://corimest.github.io/weather-dashboard/</p>
        </div>
        <img src={photo} style={{ width: '50%' }} alt='weather dashboard picture one'/>
        </section>
    )
}

export default Weather; 