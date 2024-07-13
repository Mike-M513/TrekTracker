import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useEffect, useState, useImperativeHandle, forwardRef } from "react";
import { getParks } from "../api/api";

const AutoCompleteActivities = forwardRef(
  ({ activities, handleActivityChoice }, ref) => {
    const [selectedActivites, setSelectedActivites] = useState([]);

    useImperativeHandle(ref, () => ({
      clear() {
        setSelectedActivites([]);
      },
    }));

    return (
      <>
        <Autocomplete
          id="activities"
          multiple
          freeSolo
          onChange={(event, value) => {
            setSelectedActivites(value);
            handleActivityChoice(value);
          }}
          options={activities}
          getOptionLabel={(option) => option.name}
          value={selectedActivites}
          disableClearable
          filterSelectedOptions
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Activities" />}
        />
      </>
    );
  }
);

export default AutoCompleteActivities;
