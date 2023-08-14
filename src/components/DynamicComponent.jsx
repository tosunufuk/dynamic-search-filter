import React, { useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const DynamicComponent = ({ options, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    setSelectedValue("");
  }, [options]);

  const handleSelect = (event, value) => {
    setSelectedValue(value);
    onSelect(value);
  };

  return (
    <Autocomplete
      value={selectedValue}
      onChange={handleSelect}
      options={options}
      renderInput={(params) => (
        <TextField {...params} label="Select an option" />
      )}
    />
  );
};

export default DynamicComponent;
