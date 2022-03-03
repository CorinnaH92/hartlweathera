
import './App.css';

import React, { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
     <h1>My Weather App</h1>
    <div className="row">
        <div className="col">
            <WeatherSearchForm setCurrentWeather={setCurrentWeather}
        </div>
        <div className="col">
            <ShowCurrentWeather data={ currentWeather}/>
    </div>
    </div>
    </div>
      );
}
<div
        <form>
            <label>
                Zip Code:
                <input type="text" zipcode="zipcode" />
            </label>
            <label>
                Country:
                <input type="text" country="country" />
            </label>

            <input type="submit" value="Search" />
        </form>

    </div>



  );
}

export default App;
