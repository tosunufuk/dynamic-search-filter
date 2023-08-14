# Dynamic Filter for Searching

This is an example of a dynamic filter for searching within an application. The filter allows users to select different options and refine their search criteria. The filter components are built using React and Material-UI.

## Features

- Select options from a dynamic Autocomplete component.
- Update the options of the Autocomplete based on user selections.
- Display selected values as clickable and deletable chips.
- Refine search criteria based on selections.
- Responsively center the filter components.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/tosunufuk/dynamic-search-filter.git
   cd dynamic-search-filter

   1.Install dependencies:
   npm install
   2.Run the application:
   npm start
   3.Open your browser and navigate to http://localhost:3000 to see the dynamic filter in action.

   Components
   ParentComponent
   The ParentComponent serves as the main container for the dynamic filter. It displays the selected values as chips and renders the DynamicComponent for selecting options. It also manages the state of selected values and options.

   DynamicComponent
   The DynamicComponent is responsible for rendering the Autocomplete component. It receives options from the ParentComponent and triggers the onSelect callback when an option is selected. It also clears the selected value when options change, preventing an empty selection from being added.

   Customization
   Modify the optionsMap in the ParentComponent to define specific options for each selection.
   Customize the CSS styles in the styles.module.css to adjust the appearance of the components.
   License
   This project is licensed under the MIT License.

   ```
