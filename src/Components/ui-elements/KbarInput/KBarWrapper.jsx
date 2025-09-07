import React from "react";
import { KBarProvider } from "kbar";
import { searchOptions } from "../../../data/searchOptions"; // import your search options

const KBarWrapper = ({ children }) => {
  return (
    <KBarProvider
      actions={searchOptions} // Provide the search options
      options={{
        enableHistory: true, // Enable search history
        maxSuggestions: 10,  // Limit the number of suggestions
      }}
    >
      {children}
    </KBarProvider>
  );
};

export default KBarWrapper;
