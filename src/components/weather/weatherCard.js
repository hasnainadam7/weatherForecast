import React from 'react'

const WeatherCard = ({weatherInfo}) => {
    const  {
        temp, humidity, pressure, weathermood,  name, speed, sunset, country

    }=weatherInfo
const [weatherState,setWeatherState]=React.useState()
React.useEffect(() => {
    
  if(weathermood){
    switch (weathermood) {
        
            case "Clouds":setWeatherState("wi-day-cloudy")
            break;
            case "Rains":setWeatherState("wi-fog")
            break;
            case "Clear":setWeatherState("wi-day-Sunny")
            break;
            case "Mist":setWeatherState("wi-dust")
            break;
        default:
            setWeatherState("wi-day-Sunny")
            break;
    }
  }
}, [weathermood])
let sec=sunset;
let date=new Date(sec *1000);
let timeStr=`${date.getHours()}:${date.getMinutes()}`
    return (
        <>
          
            {/* Our temp card */}
            <article className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${weatherState}`}> </i>

                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>
                            {temp}&deg;
                        </span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">
                            {weathermood}
                        </div>
                        <div className="place">
                            {name},{country}
                        </div>
                    </div>
                </div>
                <div className="date">
                    {
                        new Date().toLocaleString()
                    }
                </div>
                {/*our 4 column Section  */}
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-sunset"}></i>
                            </p>
                            <p className="extra-info-leftside">
                            {timeStr} PM<br />sunset
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-humidity"}></i>
                            </p>
                            <p className="extra-info-leftside">
                            {humidity}<br />humidity
                            </p>
                        </div>


                    </div>
                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-rain"}></i>
                            </p>
                            <p className="extra-info-leftside">
                            {pressure} <br />pressure
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-strong-wind"}></i>
                            </p>
                            <p className="extra-info-leftside">
                            {speed} <br />speed
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default WeatherCard;

