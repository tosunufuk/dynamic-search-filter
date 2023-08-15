import React, { useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import styles from "./styles.module.css"; // Import your CSS module

const DynamicComponent = ({ options, onSelect, isAutoselectVisible }) => {
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    setSelectedValue("");
  }, [options]);

  const handleSelect = (event, value) => {
    setSelectedValue(value);
    onSelect(value);
  };

  return (
    <div>
      {isAutoselectVisible !== false ? (
        <Autocomplete
          value={selectedValue}
          onChange={handleSelect}
          options={options}
          renderInput={(params) => (
            <TextField {...params} label="Select an option" />
          )}
        />
      ) : (
        <div className={styles.textfieldWithButton}>
          <TextField
            label="Enter Value"
            variant="outlined"
            fullWidth
            /* value={selectedValue} */
            onChange={(event) => setSelectedValue(event.target.value)}
          />
          <Button
            variant="contained"
            onClick={() => {
              alert("Search");
            }}
          >
            Search
          </Button>
        </div>
      )}
    </div>
  );
};

export default DynamicComponent;
