import "./Weather.css";
import React from "react";
import { Typography } from "antd";

interface WeatherData {
  icon: string;
  main: string;
  description: string;
}

interface WeatherDataSectionProps {
  weatherData: WeatherData;
}
const WeatherDataSection: React.FunctionComponent<WeatherDataSectionProps> = (
  props
) => {
  const { weatherData } = props;
  const iconUrl = `http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`;

  return (
    <div>
      <img src={iconUrl} className="Weather-logo" alt="logo" />
      <Typography.Title level={2}>{weatherData.main}</Typography.Title>
      <Typography.Text>{weatherData.description}</Typography.Text>
    </div>
  );
};

const getWeatherFromApi = async (): Promise<WeatherData> => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=Helsinki&appid=${process.env.REACT_APP_API_KEY}`
  );
  const data = await response.json();
  const weather = data.weather[0];
  return weather;
};

const Weather: React.FunctionComponent = () => {
  const [weatherData] = React.useState<WeatherData | undefined>(undefined);


  if (!weatherData) {
    return <p>No data</p>;
  }
  return (
    <Typography.Title>Current Weather</Typography.Title>
    <WeatherDataSection weatherData={weatherData} />
  );
};

export default Weather;
