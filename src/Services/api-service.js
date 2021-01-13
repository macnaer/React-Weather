import axios from "axios";

export async function updateWeather(location){
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c1fb2275690ca17e568dd7636b4f9511&lang=ua&units=metric`;
    const data = await  axios.get(API_URL)
    .then(responce => {
        // console.log(responce.data)
        return responce.data;
    }).catch(err => {
        return err.responceText;
    })
    return data;
}   

