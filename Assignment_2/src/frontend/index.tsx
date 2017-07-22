/// <reference path="../../node_modules/@types/googlemaps/index.d.ts" />
import './theme/full-lambda-theme.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { WeatherPageContainer } from './controller/WeatherPageContainer';
// Attach our React components to the 'root' id in the HTML page.
ReactDOM.render(
  <WeatherPageContainer/>,  
  document.getElementById('root')
);
