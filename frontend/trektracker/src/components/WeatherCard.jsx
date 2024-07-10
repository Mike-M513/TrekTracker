import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const WeatherCard = ({ name, temperature, tempUnit, forecast, icon }) => {
  return (
    <Grid xs={2}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1">
            {temperature}
            {"\xB0"} {tempUnit}
          </Typography>
          <Typography gutterBottom variant="body2">
            {forecast}
          </Typography>
        </CardContent>
        <CardMedia
          sx={{ height: 150 }}
          image={`${icon}`}
          title="weather icon"
        />
      </Card>
    </Grid>
  );
};

export default WeatherCard;
