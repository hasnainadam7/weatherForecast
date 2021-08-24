import React, { useState, useEffect } from 'react'
import "./style.css"
import WeatherCard from './weatherCard'
const Temp = () => {
    //calling api 
    const [searchValue, setSearchValue] = useState("karachi")
    const [tempInfo, settempInfo] = useState({})
    const getWeatherInfo = async () => {


        try {
            let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
                ${searchValue}&units=metric&appid=d1aef17e11e070369a48e2ade641b7d7`
            const response = await fetch(apiUrl)
            const data = await response.json()


            const { temp, humidity, pressure } = data.main
            const { main: weathermood, } = data.weather[0]
            const { name } = data;
            const { speed } = data.wind
            const { country, sunset } = data.sys

            const myNewWeatherInfo = {
                temp, humidity, pressure, weathermood, name, speed, sunset, country

            }
            settempInfo(myNewWeatherInfo)
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {

        return () => {
            getWeatherInfo();
        }
    }, [])

    return (
        <>
           <div className="wrap">
                <div className="search">
                    <input type="search"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        name=""
                        className="searchTerm"
                        placeholder="Search...."
                        autoFocus id="search" />

                    <button type="button" className="searchButton" onClick={() => getWeatherInfo()}>
                        Search
                    </button>
                </div>



            </div>
           <WeatherCard weatherInfo={tempInfo} />
        </>
    )
}

export default Temp
