import {useState} from "react";

function WeatherSearchForm(props){

    const [locationSearch, setLocationSearch] = useState('France');
    const [locations, setLocations] = useState(['Belfast', 'Dublin']);

    const handleUpdate = (e) => {
        e.preventDefault();
        const uri = 'api.openweathermap.org/data/2.5/weather?zip=9020,AT&appid=f5ea329349ed821a393ce49bfd1418c8'
        console.log(uri);

        fetch(uri)
            .then(response => {
                if(response.status === 200)
                    return response.json();
            })
            .then(data => props.setCurrentWeather(data))
            .catch(exception => console.error)
    }
}