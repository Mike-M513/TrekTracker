import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useEffect, useState, useImperativeHandle, forwardRef } from "react";
import { getParks } from "../api/api";

const AutoCompleteSearch = forwardRef(({ handleParkChoice }, ref) => {
  const [nationalParks, setNationalParks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    async function performGetParks() {
      const parks = await getParks();
      setNationalParks(parks);
    }
    performGetParks();
  }, []);

  useImperativeHandle(ref, () => ({
    clear() {
      setInputValue("");
    },
  }));
  return (
    <>
      <Autocomplete
        id="parks"
        freeSolo
        onChange={(event, value) => handleParkChoice(value)}
        options={nationalParks}
        getOptionLabel={(option) => option.park_name}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        disableClearable
        renderInput={(params) => (
          <TextField {...params} label="National Parks" />
        )}
      />
    </>
  );
});

export default AutoCompleteSearch;
