import React from "react";
import { useState, useEffect } from "react";
import { getParkWeatherURL, getParkWeather } from "../api/api";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

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
  console.log(parkWeather);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={1.5}>
            <h3>test</h3>
        </Grid>
        <Grid xs={2}>
            <h3>test</h3>
        </Grid>
        <Grid xs={2}>
            <h3>test</h3>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WeatherSection;
