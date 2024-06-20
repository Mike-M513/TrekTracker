import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const AutoCompleteSearch = () => {
  return (
    <>
      <Autocomplete
        id="parks"
        freeSolo
        options={nationalParks}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="National Parks" />}
      />
    </>
  );
};

const nationalParks = [
  { id: 1, label: "Acadia" },
  { id: 2, label: "American Samoa" },
  { id: 3, label: "Arches" },
  { id: 4, label: "Badlands" },
  { id: 5, label: "Big Bend" },
  { id: 6, label: "Biscayne" },
  { id: 7, label: "Black Canyon of the Gunnison" },
  { id: 8, label: "Bryce Canyon" },
  { id: 9, label: "Canyonlands" },
  { id: 10, label: "Capitol Reef" },
  { id: 11, label: "Carlsbad Caverns" },
  { id: 12, label: "Channel Islands" },
  { id: 13, label: "Congaree" },
  { id: 14, label: "Crater Lake" },
  { id: 15, label: "Cuyahoga Valley" },
  { id: 16, label: "Death Valley" },
  { id: 17, label: "Denali" },
  { id: 18, label: "Dry Tortugas" },
  { id: 19, label: "Everglades" },
  { id: 20, label: "Gates of the Arctic" },
  { id: 21, label: "Gateway Arch" },
  { id: 22, label: "Glacier" },
  { id: 23, label: "Glacier Bay" },
  { id: 24, label: "Grand Canyon" },
  { id: 25, label: "Grand Teton" },
  { id: 26, label: "Great Basin" },
  { id: 27, label: "Great Sand Dunes" },
  { id: 28, label: "Great Smoky Mountains" },
  { id: 29, label: "Guadalupe Mountains" },
  { id: 30, label: "Haleakalā" },
  { id: 31, label: "Hawaiʻi Volcanoes" },
  { id: 32, label: "Hot Springs" },
  { id: 33, label: "Indiana Dunes" },
  { id: 34, label: "Isle Royale" },
  { id: 35, label: "Joshua Tree" },
  { id: 36, label: "Katmai" },
  { id: 37, label: "Kenai Fjords" },
  { id: 38, label: "Kings Canyon" },
  { id: 39, label: "Kobuk Valley" },
  { id: 40, label: "Lake Clark" },
  { id: 41, label: "Lassen Volcanic" },
  { id: 42, label: "Mammoth Cave" },
  { id: 43, label: "Mesa Verde" },
  { id: 44, label: "Mount Rainier" },
  { id: 45, label: "New River Gorge" },
  { id: 46, label: "North Cascades" },
  { id: 47, label: "Olympic" },
  { id: 48, label: "Petrified Forest" },
  { id: 49, label: "Pinnacles" },
  { id: 50, label: "Redwood" },
  { id: 51, label: "Rocky Mountain" },
  { id: 52, label: "Saguaro" },
  { id: 53, label: "Sequoia" },
  { id: 54, label: "Shenandoah" },
  { id: 55, label: "Theodore Roosevelt" },
  { id: 56, label: "Virgin Islands" },
  { id: 57, label: "Voyageurs" },
  { id: 58, label: "White Sands" },
  { id: 59, label: "Wind Cave" },
  { id: 60, label: "Wrangell–St. Elias" },
  { id: 61, label: "Yellowstone" },
  { id: 62, label: "Yosemite" },
  { id: 63, label: "Zion" },
];

export default AutoCompleteSearch;
