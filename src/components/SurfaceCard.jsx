import React from "react";
import { Card, CardContent, TextField, Button } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

const SurfaceCard = ({ onSearch }) => {
  return (
    <Card>
      <CardContent>
        <h3>Surface Selection</h3>
        <Autocomplete
          options={["Country", "IMO", "Penant Number"]}
          renderInput={(params) => (
            <TextField {...params} label="Select a country" />
          )}
        />
      </CardContent>
    </Card>
  );
};

export default SurfaceCard;
