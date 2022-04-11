import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [weather, setWeather] = useState({});
  const [locations, setLocations] = useState("Klagenfurt");
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    ifClicked();

  }, []);

  function ifClicked() {
    fetch(
        `http://api.openweathermap.org/data/2.5/weather?zip=9020,AT&appid=f5ea329349ed821a393ce49bfd1418c8`
    )
        .then((res) => {
          if (res.ok) {
            console.log(res.status);
            console.log(res);
            return res.json();
          } else {
            if (res.status === 404) {
              return alert("Etwas ist schief gelaufen!");
            }
            alert("Es ist etwas schief gelaufen");
            throw new Error("Error");
          }
        })
        .then((object) => {
          setWeather(object);
          console.log(weather);
        })
        .catch((error) => console.log(error));
    fetch(
        `http://api.openweathermap.org/data/2.5/weather?zip=9020,AT&appid=f5ea329349ed821a393ce49bfd1418c8`
    )
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Du hast einen Fehler gemacht!");
          }
        })
        .then((data) => {
          console.log(data);
          setPhotos(data?.results[0]?.urls?.raw);
        })
        .catch((error) => console.log(error));
  }
  return (
      <div className="app">
        <div className="wrapper">
          <div className="search">
            <input
                type="text"
                value={locations}
                onChange={(e) => setLocations(e.target.value)}
                placeholder="Stadt eingeben"
                className="location_input"

            />
              <button className="location_searcher" onClick={ifClicked}>
              Search Location
            </button>
          </div>
          <div className="app__data">
            <p className="temp">Current Temperature: {weather?.main?.temp}</p>
          </div>
          <img className="app__image" src={photos} alt="" />
        </div>
      </div>
  );
}
export default App;