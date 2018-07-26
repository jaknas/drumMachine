import React from "react";
import ReactDOM from "react-dom";
import DrumBox from "./components/DrumBox";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <DrumBox />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
