const initialState = {
    Weather: {
        weather: "",
        location: "Рівне",
        coord: "",
        temp: "",
        time: "",
        date: "",
    },
    loading: true
};

const WeatherReducer = (state = initialState, action) => {
    switch(action.type){
        case "LOAD_WEATHER":
        return{
            loading: false,
            Weather: action.payload
        }
       default: return state;
    }
}

export default WeatherReducer;