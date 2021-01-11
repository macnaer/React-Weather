import React from "react";
import axios from "axios";
import "./index.css";

class Weather extends React.Component{

    API_URL = `https://api.openweathermap.org/data/2.5/weather?q=Rivne&appid=d663677633bd6cb690bbdea66fe5a981`;

    state = {
        coord: {lon: 26.2274, lat: 50.6231},
        dt: 1610388203,
        id: 695594,
        main: {temp: 270.7, feels_like: 266.88, temp_min: 270.7, temp_max: 270.7, pressure: 1022},
        name: "Rivne",
        sys: {country: "UA", sunrise: 1610345577, sunset: 1610375560},
        date: new Date()
    }

    componentDidMount(){
        axios.get(this.API_URL).then(res => {
        console.log(res.data)
        }).catch(err => console.log(err))
    }


    render(){
    console.log("STATE" , this.state);
    const { name, main, date } = this.state;
        return(
            <div className="container-fluid px-1 px-md-4 py-5 mx-auto">
            <div className="row d-flex justify-content-center px-3">
                <div className="card">
                    <h2 className="ml-auto mr-4 mt-3 mb-0">{name}</h2>
                    <p className="ml-auto mr-4 mb-0 med-font">Snow</p>
                    <h1 className="ml-auto mr-4 large-font">{main.temp}&#176;</h1>
                    <h1 className="ml-auto mr-4 large-font">{main.feels_like}&#176;</h1>
                    <p className="time-font mb-0 ml-4 mt-auto">{date.toLocaleTimeString()}<span className="sm-font"></span></p>
                    <p className="ml-4 mb-4">{date.getFullYear()}</p>
                </div>
            </div>
        </div>
        )
    }
}

export default Weather;