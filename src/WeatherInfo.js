import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="row">
        <div className="col-7">
          <h1>{props.data.city}</h1>

          <ul>
            <li>
              {" "}
              <FormattedDate data={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description} </li>
          </ul>
        </div>

        <div className="col-5">
          <div className="float-left">
            <WeatherIcon code={props.data.icon} size={64} />
          </div>
          <WeatherTemperature celsius={props.data.temperature} />
          <ul>
            <li> Humidity : {props.data.humidity}% </li>
            <li>Wind : {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
