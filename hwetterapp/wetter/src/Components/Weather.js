import React, { useState } from "react";
import ShowCurrentWeather from "./ShowCurrentWeather";
import moment from 'moment';

function Weather() {
    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [form, setForm] = useState({
        city: "",
        country: "",
    });
    const APIKEY = "f5ea329349ed821a393ce49bfd1418c8";
    function weatherData(e) {
        e.preventDefault();
        if (form.city === "") {
            alert("Add values");
        } else {
            fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
            )
                .then((res) => res.json())
                .then((data) => setWeather({data: data}));

            fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?zip=${form.city},${form.country}&APPID=${APIKEY}`)
                .then((res) => res.json())
                .then((data) => data.list)
                .then(list => setForecast(list));
        }

        fetch(`{{server}}/set?5=http://pc39.el.htl.local:3000`)
            .then((data) => data.json())
            .then(data => this.setState({data, loading: false}))

    }

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name === "city") {
            setForm({ ...form, city: value });
        }
        if (name === "country") {
            setForm({ ...form, country: value });
        }
    };
    return (
        <div className="weather">
            <h2> <span className="title">Aktuelles Wetter</span> </h2>
            <br />
            <form>
                <input
                    type="text"
                    placeholder="stadt"
                    name="city"
                    onChange={(e) => handleChange(e)}
                />
                <input
                    type="text"
                    placeholder="land"
                    name="country"
                    onChange={(e) => handleChange(e)}
                />

                <button className="getweather" onClick={(e) => weatherData(e)}>
                    Suchen
                </button>
            </form>

            {weather.data !== undefined ? (
                <div>
                    <ShowCurrentWeather data={weather.data} />
                </div>
            ) : null}
            <h2>Durchschnitsstemperatur für die nächsten 7 Tage</h2>
            {forecast.map((f,i)=>

                <div key={ i}> Durchschnittstemperatur : {(f.temp.day  -273.15).toFixed(1)} °C </div>)}
        </div>
    );
}
export default Weather;