import React from "react";

function ShowCurrentWeather(props) {
    const { data } = props;
    return (
        <div className="ShowCurrentWeather">
            {data.cod !== 404 ? (
                <React.Fragment>
                    <div className="main">
            <span className="title">

            </span>
                        <h1>
                            {" "}
                            {Math.floor(data.main.temp - 273.15)}°C
                        </h1>
                        <span className="weather-main">{data.weather[0].main}</span>

                    </div>
                    <div className="weather-details">
                        <div className="first">
                            <table>
                                <tr>
                                    <td>
                                        <h2>höchst Temperatur: </h2>
                                    </td>
                                    <td>
                    <span>
                      {Math.floor(data.main.temp_max - 273.15 )}°C /
                    </span>
                                    </td>
                                    <td>
                                        <h2>niedrigste Temperatur: </h2>
                                    </td>
                                    <td>
                    <span>
                      {Math.floor(data.main.temp_min - 273.15 )}°C
                    </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h2>Sonnenaufgang:</h2>
                                    </td>
                                    <td>
                    <span>
                      {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                    </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h2>Sonnenuntergang:</h2>
                                    </td>
                                    <td>
                    <span>
                      {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                    </span>
                                    </td>
                                </tr>

                            </table>
                        </div>
                    </div>
                </React.Fragment>
            ) : (
                <div className="main">
                    <h2>{data.message}</h2>
                </div>
            )}
        </div>
    );
}

export default ShowCurrentWeather;