import React, { useState } from "react";
import { Card, CardContent, Chip } from "@mui/material";
import DynamicComponent from "./DynamicComponent";
import styles from "./styles.module.css";

const ParentComponent = () => {
  const environment = ["space", "air", "surface", "subsurface", "land"];
  const [selectedValues, setSelectedValues] = useState([]);
  const [currentOptions, setCurrentOptions] = useState(environment);
  const [isAutoselectVisible, setAutoselectVisible] = useState(true);

  const optionsMap = {
    space: ["type", "dimensions", "materials", "countries"],
    air: ["wingspan", "engines", "payload", "countries"],
    surface: ["dimensions", "weight", "terrain", "countries", "imo"],
    subsurface: ["depth", "sonar", "torpedoes", "countries"],
    land: ["wheels", "armor", "firepower", "countries"],
    type: ["Satellite", "Space Station"],
    dimensions: ["Small", "Medium", "Large"],
    materials: ["Metal", "Composite", "Ceramic"],
    wingspan: ["Short", "Medium", "Long"],
    engines: ["Jet", "Propeller", "Rocket"],
    payload: ["Passengers", "Cargo"],
    weight: ["Light", "Medium", "Heavy"],
    terrain: ["Water", "Desert", "Forest", "Urban"],
    depth: ["Shallow", "Medium", "Deep"],
    sonar: ["Active", "Passive"],
    torpedoes: ["Conventional", "Nuclear"],
    wheels: ["2-Wheel", "4-Wheel"],
    armor: ["Light", "Medium", "Heavy"],
    firepower: ["Machine Guns", "Cannons", "Missiles"],
    countries: [
      "Albania",
      "Belgium",
      "Bulgaria",
      "Canada",
      "Croatia",
      "Czech Republic",
      "Denmark",
      "Estonia",
      "France",
      "Germany",
      "Greece",
      "Hungary",
      "Iceland",
      "Italy",
      "Latvia",
      "Lithuania",
      "Luxembourg",
      "Montenegro",
      "Netherlands",
      "North Macedonia",
      "Norway",
      "Poland",
      "Portugal",
      "Romania",
      "Slovakia",
      "Slovenia",
      "Spain",
      "Turkey",
      "United Kingdom",
      "United States",
      // ... add more NATO countries here ...
    ],
    // ... add more options here ...
  };

  const handleDynamicSelect = (value) => {
    if (value) {
      setSelectedValues((prevValues) => [...prevValues, value]);
      if (optionsMap[value]) {
        setCurrentOptions(optionsMap[value]);
        setAutoselectVisible(true);
      } else if (selectedValues.length > 0 && !optionsMap[value]) {
        console.log("here I am!");
        setAutoselectVisible(false);
      } else {
        setCurrentOptions(environment);
        setAutoselectVisible(true);
      }
    }
  };

  const handleChipDelete = (chipToDelete) => {
    setSelectedValues([]);
    setCurrentOptions(environment);
    setAutoselectVisible(true);
  };

  return (
    <div className={styles.centeredContainer}>
      <Card className={styles.maxWidthCard}>
        <CardContent>
          <div className={styles.chipsContainer}>
            {selectedValues.map((value, index) => (
              <Chip
                key={index}
                label={value}
                className={styles.chip}
                onDelete={() => handleChipDelete(value)}
                clickable
              />
            ))}
          </div>
          <DynamicComponent
            options={currentOptions}
            onSelect={handleDynamicSelect}
            isAutoselectVisible={isAutoselectVisible}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default ParentComponent;
