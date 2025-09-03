import { useState, useEffect } from 'react'

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    if (!capital) return 

    const apiKey = import.meta.env.VITE_WEATHER_KEY // keep your API key safe
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}&units=metric`)
      .then(res => {
        if (!res.ok) throw new Error("Weather data not found")
        return res.json()
      })
      .then(data => setWeather(data))
      .catch(() => setWeather(null))
  }, [capital]) // re-run if capital changes

  if (!weather) return <p>Loading weather data...</p>

  const iconUrl = 'https://openweathermap.org/img/wn/' + weather.weather[0].icon + '@2x.png'
  console.log("url is", iconUrl)

  

  return (
    <div>
      <p>Temperature: {weather.main.temp} °C</p>
      <p>Weather: {weather.weather[0].description}</p>
      <img src={iconUrl} alt={weather.weather[0].description} />
      <p>Wind: {weather.wind.speed} m/s</p>
    </div>
  )
}

export default Weather
