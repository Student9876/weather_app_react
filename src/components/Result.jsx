import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import env from 'react-dotenv';

function Result(props) {

    const [searchParams] = useSearchParams();
    const cityName = searchParams.get('city');

    const query = cityName;
    const appID = env.API_KEY;
    const units = "metric"
    const uri =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        query +
        "&appid=" +
        appID +
        "&units=" +
        units;

    const [result, setResult] = useState({
        temp: "",
        place: "",
        lat: "",
        lon: "",
        weatherDescription: "",
        icon: "",
        iconUrl: ""
    })


    const fecthApiData = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if(data.cod === 200){

                console.log(data);
                setResult({
                    temp: data.main.temp,
                    place: cityName,
                    lat: data.coord.lat,
                    lon: data.coord.lon,
                    weatherDescription: data.weather[0].description,
                    icon: data.weather[0].icon,
                    iconUrl: "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
                    
                })
            }else {
                console.log("Error")
            }
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        fecthApiData(uri);
    }, []);



    const navigate = useNavigate();
    function submitHandler(event){
        event.preventDefault();
        navigate('/');
    }

    return (
        <center>
            <div class="jumbotron">
                <h1 class="display-4">Weather report!</h1>
                <hr class="my-4" />
                <img class="weatherIcon" src={result.iconUrl}
                    width="70" height="70" alt="weather description"/>

                    <table class="resultTable" border="5">
                        <tr>
                            <td class="contentHead">Place</td>
                            <td>{result.place}</td>
                        </tr>
                        <tr>
                            <td class="contentHead">
                                Latitude
                            </td>
                            <td>
                                {result.lat}
                            </td>
                        </tr>
                        <tr>
                            <td class="contentHead">
                                Longitude
                            </td>
                            <td>
                                {result.lon}
                            </td>
                        </tr>
                        <tr>
                            <td class="contentHead">
                                Temperature
                            </td>
                            <td>
                                {result.temp} &#176;C
                            </td>
                        </tr>

                        <tr>
                            <td class="contentHead">
                                Description
                            </td>
                            <td> {result.weatherDescription} </td>
                        </tr>
                    </table>
                    <br/>
                        <form action="/re" method="post">
                            <button class="btn btn-lg btn-primary"
                                type="submit"
                                name="button" onClick={submitHandler}>Start again </button>
                        </form>
                    </div>
                </center>

                )

};


                export default Result;