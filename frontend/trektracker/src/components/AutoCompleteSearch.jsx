import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useEffect, useState } from "react";
import { getParks } from "../api/api";

const AutoCompleteSearch = ({ handleParkChoice }) => {
  const [nationalParks, setNationalParks] = useState([]);

  useEffect(() => {
    async function performGetParks() {
      const parks = await getParks();
      setNationalParks(parks);
    }
    performGetParks();
  }, []);
  return (
    <>
      <Autocomplete
        id="parks"
        freeSolo
        onChange={(event, value) => handleParkChoice(value)}
        options={nationalParks}
        getOptionLabel={(option) => option.park_name}
        disableClearable
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="National Parks" />
        )}
      />
    </>
  );
};
export default AutoCompleteSearch;
