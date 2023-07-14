// import React from "react";
import React, { useState } from "react";
// import Rain from "../assets/Rain.png";
import dayjs from "dayjs";
// import sky from "../assets/Sky.png";
import "weather-icons/css/weather-icons.css";
import { weatherIcons } from "../Utilities/Icons.utlils/icons.json";

interface Props {
  ForecastWeather: any[];
}
const WeeklyForcast: React.FC<Props> = ({ ForecastWeather }) => {
  const weeklyforecast: any[] = [];

  //today date
  const today = dayjs().format("DD");
  console.log(today);

  //everysingle day weather
  ForecastWeather.forEach((item) => {
    const datefromForecastweather = dayjs(item.dt_txt).format("DD");
    if (datefromForecastweather !== today) {
      if (weeklyforecast.length === 0) {
        weeklyforecast.push(item);
      }
      if (
        dayjs(weeklyforecast[weeklyforecast.length - 1].dt_txt).format("DD") !==
        datefromForecastweather
      ) {
        weeklyforecast.push(item);
      }
    }
  });

  console.log(weeklyforecast);

  return (
    <div className="w-1/2 p-5">
      {/* weekly Forecast */}
      <h1 className="text-center p-4 text-lg text-gray-400 font-semibold">
        WEEKLY FORECAST
      </h1>

      {/* weekes */}
      <div className="flex flex-col gap-1">
        {weeklyforecast?.map((item, index) => (
          <div
            key={index}
            className="flex justify-between bg-white/5 rounded-lg px-8 py-2.5 text-white "
          >
            {/* first div */}
            <div className="flex flex-col w-1/3">
              <p className="text-sm font-semibold tracking-wide">
                {dayjs(item.dt_txt).format("dddd")}
              </p>
              <div className="flex items-center pt-1 g">
                <i
                  className={`wi wi-${
                    weatherIcons[item.weather[0].id].icon
                  } pr-2`}
                ></i>
                <h4 className="text-[#ffffffcc] text-sm font-normal">
                  {item.weather[0]?.description}
                </h4>
              </div>
            </div>

            {/* middle div */}
            <div className="flex flex-col justify-between pl-5 w-1/3">
              <div className="flex items-center gap-1">
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-143b2d6 w-4 fill-gray-400"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="ThermostatIcon"
                >
                  <path d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-2V5c0-.55.45-1 1-1s1 .45 1 1v1h-1v1h1v2h-1v1h1v1h-2z"></path>
                </svg>
                <p className="text-sm font-semibold">
                  {Math.round(item.main.feels_like)}&deg;C
                </p>
              </div>
              <div className="flex items-center gap-1">
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-143b2d6 w-4 fill-gray-400"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="FilterDramaIcon"
                >
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.61 5.64 5.36 8.04 2.35 8.36 0 10.9 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4h2c0-2.76-1.86-5.08-4.4-5.78C8.61 6.88 10.2 6 12 6c3.03 0 5.5 2.47 5.5 5.5v.5H19c1.65 0 3 1.35 3 3s-1.35 3-3 3z"></path>
                </svg>
                <p className="text-sm font-semibold">{item.clouds?.all} %</p>
              </div>
            </div>

            {/* last div */}
            <div className="flex flex-col justify-between pl-5 w-1/3">
              <div className="flex items-center gap-1">
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-143b2d6 w-4 fill-gray-400"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="AirIcon"
                >
                  <path d="M14.5 17c0 1.65-1.35 3-3 3s-3-1.35-3-3h2c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1H2v-2h9.5c1.65 0 3 1.35 3 3zM19 6.5C19 4.57 17.43 3 15.5 3S12 4.57 12 6.5h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S16.33 8 15.5 8H2v2h13.5c1.93 0 3.5-1.57 3.5-3.5zm-.5 4.5H2v2h16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5v2c1.93 0 3.5-1.57 3.5-3.5S20.43 11 18.5 11z"></path>
                </svg>
                <p className="text-sm font-semibold">{item.wind?.speed} m/s</p>
              </div>
              <div className="flex items-center gap-1 ">
                <i className="wi wi-night-sleet pl-2"></i>
                <p className="text-sm font-semibold">{item.main.humidity} %</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyForcast;
