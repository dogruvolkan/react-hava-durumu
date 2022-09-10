import React, { useEffect, useState } from 'react'
import Load from "./load.gif"

const HavaDurumu = ({weather}) => {

    const [hour, setHour] = useState("0");

    useEffect(() =>{

      setInterval(()=>{
          const date = new Date();
          setHour(date.toLocaleTimeString())
      },1000)
    },[])

    if(!weather){
      return <img src={Load}/>
    }

    var gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
    var gun = new Date(weather.dt *1000).getDay();


    var gunDogumu = new Date(weather.sys.sunrise *1000).toLocaleTimeString();
    gunDogumu =gunDogumu.substring(0,5);
    var gunBatimi = new Date(weather.sys.sunset *1000).toLocaleTimeString();
    gunBatimi =gunBatimi.substring(0,5);

  return (
    <div>

       <div className="weather-container">
       <div className="weather-main">
          <div className="main-card">
          <p>{new Date(weather.dt *1000).toLocaleDateString()} <span>{gunler[gun]}</span> </p>
          <p>{hour}</p>
          <h1>{weather.name} <sup>{weather.sys.country}</sup></h1>
          <img src={"http://openweathermap.org/img/w/"+weather.weather[0].icon+".png"} alt="" /> 
          <h2>{weather.main.temp} °C</h2>
          <h3> {weather.weather.map(data => data.description).join(", ")}</h3>
          </div>
        </div>
        <div className="weather-sub">
            <div className="card"><h3>Rüzgar</h3><h3>{Math.round((weather.wind.speed)* 1.609)} km/sa  </h3></div>
            <div className="card"><h3>Enlem</h3><h3>{weather.coord.lat} </h3></div>
            <div className="card"><h3>Boylam</h3><h3>{weather.coord.lon} </h3></div>
            <div className="card"><h3>Nem</h3><h3>{weather.main.humidity} %</h3></div>
            <div className="card"><h3>Max Sıcaklık</h3><h3>{weather.main.temp_max} °C </h3></div>
            <div className="card"><h3>Min Sıcaklık</h3><h3>{weather.main.temp_min} °C </h3></div>
            <div className="card"><h3>Basınç</h3><h3>{weather.main.pressure} hPa </h3></div>
            <div className="card"><h3>Gün Doğumu</h3><h3>{gunDogumu} </h3></div>
            <div className="card"><h3>Gün Batımı</h3><h3>{gunBatimi}</h3></div>     
        </div>
       </div>
    </div>
  )
}

export default HavaDurumu