export const getWeather = (weather) => {
  return {
    type: "LOAD_WEATHER",
    payload: weather,
  };
};