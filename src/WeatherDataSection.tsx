import React from 'react';
import { Row, Col, Typography } from "antd";
import {WeatherData} from './Weather';

interface WeatherDataSectionProps {
    weatherData: WeatherData;
    city: string;
  }
  const WeatherDataSection: React.FunctionComponent<WeatherDataSectionProps> = (
    props
  ) => {
    const { weatherData } = props;
    const { city } = props;
    const iconUrl = `http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`;
  
    return (
      <div>
        <Row gutter={32}>
          <Col span={6}>{city}</Col>
          <Col span={6}><img src={iconUrl} className="Weather-logo" alt="logo" /></Col>
          <Col span={6}><Typography.Title level={2}>{weatherData.main}</Typography.Title>
        <Typography.Text>{weatherData.description}</Typography.Text></Col>
          <Col span={6}></Col>
        </Row>
      </div>
    );
  };
  

export default WeatherDataSection;