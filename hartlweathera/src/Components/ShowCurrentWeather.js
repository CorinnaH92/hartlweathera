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
                        <span className="title">
              Last refresh at {new Date().toLocaleTimeString()}
            </span>

                        <h1>
                            {" "}
                            {Math.floor(data.main.temp - 273.15)}
                            <sup>o</sup>
                        </h1>
                        <span className="weather-main">{data.weather[0].main}</span>

                    </div>
                    <div className="weather-details">
                        <div className="first">
                            <table>
                                <tr>
                                    <td>
                                        <h5>high/low temperature</h5>
                                    </td>
                                    <td>
                    <span>
                      {Math.floor(data.main.temp_max - 273.15 )}Â°C
                        {Math.floor(data.main.temp_min - 273.15)}Â°C
                    </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>sunrise</h5>
                                    </td>
                                    <td>
                    <span>
                      {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                    </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>sunset</h5>
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