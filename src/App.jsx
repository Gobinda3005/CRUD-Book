import React from "react";
import Books from "./Books"; // Importing Books component
import { BookProvider } from "./BookContext"; // Importing BookProvider from BookContext file

const App = () => {
  return (
    <BookProvider> {/* Using BookProvider instead of MovieProvider */}
      <Books /> {/* Using Books component instead of Movies */}
    </BookProvider>
  );
};

export default App;
