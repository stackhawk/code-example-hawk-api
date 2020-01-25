import React from "react";
import "./App.css";
import { HawkTable } from "./HawkTable";
import { HawkDetails } from "./HawkDetails";

const App: React.FC = () => {
  return (
    <div className="App">
      <HawkTable></HawkTable>
      <HawkDetails></HawkDetails>
    </div>
  );
};

export default App;
