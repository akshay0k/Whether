// import React from 'react'
import Currentwheather from './Currentwheather';
import WeeklyForcast from './WeeklyForcast'

interface Props {
  currentWeather: any[];
  ForecastWeather:any[];
}

const WhetherDeatailes:React.FC<Props> = ({currentWeather,ForecastWeather}) => {
  return (
    <div className='full h-full flex '>
        <Currentwheather currentWeather={currentWeather} ForecastWeather={ForecastWeather}/>
        <WeeklyForcast ForecastWeather={ForecastWeather}/>
    </div>
  )
}

export default WhetherDeatailes