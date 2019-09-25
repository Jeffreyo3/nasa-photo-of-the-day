import React from "react";
import "./App.css";
import CardCreator from './components/CardCreator.js';
import AxiosData from "./components/axiosData.js";



function App() {
  return (
    <div className="App">
      <h1>NASA Image of the Day</h1>
      {/*<CardCreator />*/}
      <AxiosData />
    </div>
  );
}

export default App;
