import React, { useRef, useState } from "react";
import "./App.scss";
import { AiFillGithub } from "react-icons/ai";
import WhetherDeatailes from "../Components/WhetherDeatailes";
import { ChangeEvent, useEffect } from "react";
import { DebounceInput } from "react-debounce-input";
import {
  fetchCities,
  getForecastWeather,
  getWeather,
} from "../Utilities/Api/WhetherApiService";
import { MdKeyboardArrowDown } from "react-icons/md";

interface cityName {
  id: number;
  name: string;
  longitude: number;
  latitude: number;
}

interface WeatherDeatailes {
  name: string;
}

function App(): JSX.Element {
  const date = new Date();
  const [togle, settogle] = useState(false);
  // const [Loading, setLoading] = useState(false);

  const [cityName, setcityName] = useState("");
  const [suggestions, setSuggestions] = useState<cityName[]>([]);
  const [currentWeather, setCurrentWeather] = useState<WeatherDeatailes[]>([]);
  const [ForecastWeather, setForecastWeather] = useState<WeatherDeatailes[]>(
    []
  );

  //handle onchange
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setcityName(e.target.value);
  };

  //handleClick
  const handleClick = async (item: cityName) => {
    const data = await getWeather(item.latitude, item.longitude);
    const forcastData = await getForecastWeather(item.latitude, item.longitude);
    setCurrentWeather(data);
    setForecastWeather(forcastData.list);
  };

  let previousQ:any = useRef(cityName);

  useEffect(() => {
    const fetchSuggestedCities = async () => {
      const data = await fetchCities(cityName);
      if (data.length === 0) return setSuggestions(["No result Found"]);
      return setSuggestions(data);
    };
    if (previousQ.current !== cityName) fetchSuggestedCities();
    previousQ = cityName
  }, [cityName]);



  
  return (
    <div className="h-screen w-screen">
      <div className="w-full h-full flex flex-col flex-wrap items-center bg-gradient-to-r from-[#000428] to-[#004e92]">
        <div className="card w-7/12   p-4 mt-8  border border-gray-600 rounded-2xl relative flex flex-col">
          <div className="text-white flex justify-between mb-2">
            <img
              src={
                "data:image/png;base64,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"
              }
              alt=""
              className="w-28"
            />
            <p className="text-xs font-bold">{date.toUTCString()}</p>
            <AiFillGithub size={25} />
          </div>

          {/* input and suggestion field  */}
          <div className="relative">
            {/* input field */}
            <div
              className="flex items-center justify-center w-full bg-red-200 my-2 rounded-md overflow-hidden focus:ring-0 relative z-20"
              onFocus={() => settogle(true)}
              onBlur={() => settogle(false)}
            >
              <DebounceInput
                type="text"
                debounceTimeout={50}
                placeholder="Search for cities"
                className="w-full p-2 placeholder:text-sm placeholder:tracking-wide"
                value={cityName}
                onChange={handleChange}
              />
              <MdKeyboardArrowDown
                size={25}
                className="absolute right-1 top-2 border-l-2 fill-gray-400"
              />
            </div>

            {/* suggestion field */}
            {togle && (
              <div className="w-full  bg-white rounded-md overflow-hidden absolute z-10">
                {suggestions?.map((item, index) => (
                  <button
                    key={index}
                    className="block w-full text-start p-2 text-md font-medium tracking-wide hover:bg-blue-500 hover:text-white"
                    onMouseDown={() => handleClick(item)}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* SearchTogle */}
          {/* <Search settogle={settogle} togle={togle} /> */}

          {/* WhetherDeatailes */}
          {
            <WhetherDeatailes
              currentWeather={currentWeather}
              ForecastWeather={ForecastWeather}
            />
          }

          {/* overlay */}
          <div
            className="absolute inset-0 bg-transparent rounded-lg overflow-hidden "
            // onClick={() => settogle(false)}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
