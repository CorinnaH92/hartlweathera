import {useState} from "react";
import * as url from "url";
import {OPENWEATHER_API_KEY} from "../index";

function WeatherSearchForm(props){
             const [zipCode, setZipCode] = useState("9020");
             const  [countryCode, setCountryCode]  = useState("AT");


 const handleUpdates = (e)=> {
     e.preventDefault();
            const uri=  'api.openweathermap.org/data/2.5/weather?zip=9102,AT&appid=f5ea329349ed821a393ce49bfd1418c8'
            console.log(uri);

            fetch(uri)
              .then(response => {
                  console.log(response)
                  return response.json();
              })
                .then(data=> props.setCurrentWeather(data))
                .catch(exception =>console.log(exception))  ;
 }


 }