import React from "react";
import { useState, useEffect } from "react";
import { getParkWeatherURL, getParkWeather } from "../api/api";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import WeatherCard from "./WeatherCard";

const WeatherSection = ({ lat, long }) => {
  const [parkWeather, setParkWeather] = useState(null);

  useEffect(() => {
    async function performGetParkWeather() {
      const url = await getParkWeatherURL(lat, long);
      const weather = await getParkWeather(url);
      setParkWeather(weather["properties"]["periods"]);
    }
    performGetParkWeather();
  }, [lat]);
  return (
    <Box sx={{ flexGrow: 1 }} className="weather-section">
      <h2>Weather</h2>
      <Grid container spacing={3} columns={14}>
        {parkWeather &&
          parkWeather.map((park) => (
            <WeatherCard
              name={park["name"]}
              temperature={park["temperature"]}
              tempUnit={park["temperatureUnit"]}
              forecast={park["shortForecast"]}
              icon={park["icon"]}
            />
          ))}
      </Grid>
    </Box>
  );
};

export default WeatherSection;
