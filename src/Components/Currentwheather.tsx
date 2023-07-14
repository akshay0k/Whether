// import React from "react";
import React from "react";
import cloud from "../assets/WeatherCloud.png";
import dayjs from "dayjs";
interface Props {
  currentWeather: any[];
  ForecastWeather: any[];
}

const Currentwheather: React.FC<Props> = ({
  currentWeather,
  ForecastWeather,
}) => {
  //today date
  const today = dayjs().format("YYYY MM DD");

  //filter Forcastweather
  const todayForecast = ForecastWeather.filter((item) => {
    const forecastdate = dayjs(item.dt_txt).format("YYYY MM DD");
    return forecastdate === today;
  });

  console.log("ff",currentWeather);

  return (
    <div className="w-1/2 text-white flex flex-col justify-between p-4">
      {/* Current Weather */}

      {currentWeather && (
        <div className="">
          <h1 className="uppercase text-center pt-5 text-lg font-extrabold text-gray-400">
            Current Weather"No result Foun
          </h1>
          <div className="flex justify-between mt-3">
            <div className="text-center">
              <h3 className="text-base font-semibold">{currentWeather.name}</h3>
              <h4 className="text-sm font-normal text-slate-300">
                Today {dayjs().format("DD MMM")}
              </h4>
            </div>
            <div className="text-center">
              <h3 className="text-base font-semibold">
                {currentWeather.main?.temp}&deg;C
              </h3>
              <h4 className="text-sm font-normal text-slate-300">
                {/* {currentWeather.weather[0].description} */}Broken cloud
              </h4>
            </div>
            <div className="text-center">
              <img src={cloud} className="w-12" alt="" />
            </div>
          </div>
        </div>
      )}

      {/* Air Conditions */}
      <div className="py-7">
        <h1 className="uppercase text-center pt-7 pb-3 text-lg font-extrabold text-gray-400">
          AIR CONDITIONS
        </h1>
        <div className="flex justify-between">
          <div className="">
            <div className="flex">
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-8feus5 fill-gray-400 w-4"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="ThermostatIcon"
              >
                <path d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-2V5c0-.55.45-1 1-1s1 .45 1 1v1h-1v1h1v2h-1v1h1v1h-2z"></path>
              </svg>
              <h1 className="text-sm pl-2 font-normal text-gray-400">
                Real Feel
              </h1>
            </div>
            <div className="text-center text-base font-semibold">
              {currentWeather.main?.feels_like}°C
            </div>
          </div>

          <div className="">
            <div className="flex">
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-8feus5 fill-gray-200 w-4"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="AirIcon"
              >
                <path d="M14.5 17c0 1.65-1.35 3-3 3s-3-1.35-3-3h2c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1H2v-2h9.5c1.65 0 3 1.35 3 3zM19 6.5C19 4.57 17.43 3 15.5 3S12 4.57 12 6.5h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S16.33 8 15.5 8H2v2h13.5c1.93 0 3.5-1.57 3.5-3.5zm-.5 4.5H2v2h16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5v2c1.93 0 3.5-1.57 3.5-3.5S20.43 11 18.5 11z"></path>
              </svg>
              <h1 className="text-sm pl-2 font-normal text-gray-400">Wind</h1>
            </div>
            <div className="text-center text-base font-semibold">
              {currentWeather.wind?.speed}m/s
            </div>
          </div>

          <div className="">
            <div className="flex">
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-8feus5 fill-gray-200 w-4"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="AirIcon"
              >
                <path d="M14.5 17c0 1.65-1.35 3-3 3s-3-1.35-3-3h2c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1H2v-2h9.5c1.65 0 3 1.35 3 3zM19 6.5C19 4.57 17.43 3 15.5 3S12 4.57 12 6.5h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S16.33 8 15.5 8H2v2h13.5c1.93 0 3.5-1.57 3.5-3.5zm-.5 4.5H2v2h16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5v2c1.93 0 3.5-1.57 3.5-3.5S20.43 11 18.5 11z"></path>
              </svg>
              <h1 className="text-sm pl-2 font-normal text-gray-400">Clouds</h1>
            </div>
            <div className="text-center text-base font-semibold">
              {currentWeather.clouds?.all} %
            </div>
          </div>

          <div className="">
            <div className="flex">
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-8feus5 fill-gray-200 w-4"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="AirIcon"
              >
                <path d="M14.5 17c0 1.65-1.35 3-3 3s-3-1.35-3-3h2c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1H2v-2h9.5c1.65 0 3 1.35 3 3zM19 6.5C19 4.57 17.43 3 15.5 3S12 4.57 12 6.5h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S16.33 8 15.5 8H2v2h13.5c1.93 0 3.5-1.57 3.5-3.5zm-.5 4.5H2v2h16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5v2c1.93 0 3.5-1.57 3.5-3.5S20.43 11 18.5 11z"></path>
              </svg>
              <h1 className="text-sm pl-2 font-normal text-gray-400">
                Humidity
              </h1>
            </div>
            <div className="text-center text-base font-semibold">
              {currentWeather.main?.humidity}%
            </div>
          </div>
        </div>
      </div>

      {/* TODAY'S FORECAST */}
      <div className=" ">
        <div className="text-center">
          {" "}
          <h1 className="uppercase  pt-7  text-lg font-semibold text-gray-400">
            TODAY'S FORECAST
          </h1>
          <h5 className="text-[#04c4e0] text-xs ">
            {todayForecast.length} available forecasts
          </h5>
        </div>

        <div className="flex flex-wrap justify-center mt-2 gap-2 ">
          {todayForecast?.map((items, index) => (
            <div
              key={index}
              className="flex flex-col px-3.5 py-2.5 items-center rounded-lg overflow-hidden bg-white/5 first:bg-white/20 relative"
            >
              <h3 className="text-xs font-normal text-gray-300">
                {dayjs(items.dt_txt).format("HH:mm")}
              </h3>
              <img src={cloud} className="w-9 font-normal" alt="" />
              <h3 className="text-sm font-semibold ">{items.main?.temp} °C</h3>
              {/* overlay */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Currentwheather;
