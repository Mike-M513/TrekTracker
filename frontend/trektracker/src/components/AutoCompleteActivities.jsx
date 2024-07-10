import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useEffect, useState } from "react";
import { getParks } from "../api/api";

const AutoCompleteActivities = ({ activities, handleActivityChoice }) => {
  return (
    <>
      <Autocomplete
        id="activities"
        multiple
        freeSolo
        onChange={(event, value) => handleActivityChoice(value)}
        options={activities}
        getOptionLabel={(option) => option.name}
        disableClearable
        filterSelectedOptions
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Activities" />}
      />
    </>
  );
};
export default AutoCompleteActivities;
