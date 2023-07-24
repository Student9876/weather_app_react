import React, {useState } from "react";
import weatherImageSrc from '../images/weatherImage.png'
import {useNavigate}  from "react-router-dom";

function App() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();    
    const [state, setState] = useState(true);


    function handleChange(event) {
        const newValue = event.target.value;
        setState(false);
        setInput(newValue);
      } 

    function submitHandler(event){
        event.preventDefault();
        navigate('/result?city='+input);
    }
    return (
        <div id="formDivision">
            <center>
                <img class="weatherImage" src={weatherImageSrc}
                    alt="WeatherClouds"></img>
            </center>
            <form class="text-center">
                <h2 id="cityLavel">Enter city name to get Weather Result</h2>
                <input id="cityInput" onChange={handleChange} class="form-control" type="text"
                    name="cityName" placeholder="City Name" value={input}/><br />
                <button disabled={state} class="btn btn-dark" id="btn-xl" type="submit" onClick={submitHandler}>Go</button>
            </form>

        </div>

    )
}


export default App;