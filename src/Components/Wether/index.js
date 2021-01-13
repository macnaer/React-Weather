import React from "react";
import "./index.css";
import { connect } from "react-redux";
import { updateWeather } from "../../Services/api-service";
import { getWeather } from "../../Actions/WeatherActions";

import Clock from "../Clock";

class Weather extends React.Component{

    componentDidMount(){
      console.log("componentDidMount PROPS ", this.props);
      const { getWeather } = this.props;
      updateWeather("Рівне").then(weather => {
        console.log("weather ",weather)
        const newWeather = {
          weather: "",
          location: weather.name,
          coord: "",
          temp: "",
          time: "",
          date: "",
        }
        getWeather(newWeather);
      })
    }

    handleSubmit = (event)  =>{
        event.preventDefault();
    }

    render (){
    const { location, weather, temp } = this.props.Weather;

    console.log("PROPS================>>>", this.props);
    return(
     
             <div className="container-fluid px-1 px-md-4 py-5 mx-auto">
        <div className="row d-flex justify-content-center px-3">
          <div className="card">
            <form onSubmit={this.handleSubmit}>
              <div className="group ml-auto mr-4 mt-3 mb-0">
                <input type="text"  required />
                <span className="bar" />
                <label>Введіть місто</label>
              </div>
            </form>
            <h2 className="ml-auto mr-4 mt-3 mb-0">{location}</h2>
            <p className="ml-auto mr-4 mb-0 med-font">{weather}</p>
            <h1 className="ml-auto mr-4 large-font">{temp}&#176;</h1>
            <Clock />
          </div>
        </div>
      </div>
        )
    }
}

const mapStateToProps = ({ WeatherReducer }) => {
 console.log("mapStateToProps ",WeatherReducer)
 const { Weather, loading } = WeatherReducer;
  return { Weather, loading };
};
const mapDispatchToProps = {
  getWeather
};


export default connect(mapStateToProps, mapDispatchToProps)(Weather);