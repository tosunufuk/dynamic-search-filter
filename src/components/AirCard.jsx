import React from "react";
import { Card, CardContent, TextField, Button } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

const AirCard = ({ onSearch }) => {
  return (
    <Card>
      <CardContent>
        <h3>Air Selection</h3>
        <Autocomplete
          options={["Country 1", "Country 2", "Country 3"]}
          renderInput={(params) => (
            <TextField {...params} label="Select a country" />
          )}
        />
        <Autocomplete
          options={["Class 1", "Class 2", "Class 3"]}
          renderInput={(params) => (
            <TextField {...params} label="Select a class" />
          )}
        />
        <Autocomplete
          options={["Weapon 1", "Weapon 2", "Weapon 3"]}
          renderInput={(params) => (
            <TextField {...params} label="Select a weapon" />
          )}
        />
        <Button variant="contained" onClick={onSearch}>
          Search
        </Button>
      </CardContent>
    </Card>
  );
};

export default AirCard;
