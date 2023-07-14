import axios from "axios";

export const fetchCities = async (city: string) => {
  const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

  const RAPIDAPI_HOST = "wft-geo-db.p.rapidapi.com";
  const RAPIDAPI_KEY = "8f040b26e8msh2f62795884ef5fdp148350jsn7da286345e0a";
  try {
    const { data } = await axios.get(
      `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${city}`,
      {
        // method:"get",
        headers: {
          "X-RapidAPI-Key": RAPIDAPI_KEY,
          "X-RapidAPI-Host": RAPIDAPI_HOST,
        },
      }
    );
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

// current weather api
export const getWeather = async (lat: number, lon: number) => {
  // console.log("lat", lat, lon);
  const CURRENT_CLIMATE_API_KEY = "1e86904081ab0395278fabd1bb77fb75";
  try {
    const CurrentWeatherApi = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${CURRENT_CLIMATE_API_KEY}&units=metric`
    );

    return CurrentWeatherApi.data;
  } catch (error) {
    console.log(error);
  }
};

export const getForecastWeather = async (lat: number, lon: number) => {
  // console.log(lon);

  const ForeCastApiKey = "1e86904081ab0395278fabd1bb77fb75";
  try {
    const ForecastApi = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${ForeCastApiKey}&units=metric`
    );

    return ForecastApi.data;
  } catch (error) {
    console.log(error);
  }
};
