import React, { Component } from "react";
import { Card, CardContent, TextField, Button } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import AirCard from "./AirCard"; // Import the AirCard component
import SurfaceCard from "./SurfaceCard"; // Import the SurfaceCard component
import styles from "./styles.module.css";

class DynamicCard extends Component {
  state = {
    selectedOption: "",
  };

  handleOptionChange = (event, newValue) => {
    this.setState({ selectedOption: newValue });
  };

  renderSelectedCard = () => {
    const { selectedOption } = this.state;

    switch (selectedOption) {
      case "air":
        return <AirCard />;
      case "surface":
        return <SurfaceCard />;
      default:
        return null;
    }
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <div className={styles.centeredContainer}>
        <Card className={styles.maxWidthCard}>
          <CardContent>
            <Autocomplete
              value={selectedOption}
              onChange={this.handleOptionChange}
              options={["space", "air", "surface", "subsurface", "land"]} // Update with your options
              renderInput={(params) => (
                <TextField {...params} label="Select an option" />
              )}
            />
            {this.renderSelectedCard()}
            <Button variant="contained" onClick={this.handleSearch}>
              Search
            </Button>
            <Button variant="contained" onClick={this.handleReset}>
              Reset
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default DynamicCard;
