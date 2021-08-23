import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import ToDoItem from "./components/ToDoItem";

import "./App.css";

function App() {
  const [timeImage, setTimeImage] = useState("evening");
  const [timeOfDay, setTimeOfDay] = useState("evening");

  const styles = {};

  useEffect(() => {
    const date = new Date();
    const hours = date.getHours();
    // let timeOfDay = "";

    if (hours < 12) {
      setTimeOfDay("Morning");
      setTimeImage("morning");
    } else if (hours >= 12 && hours < 17) {
      setTimeOfDay("Afternoon");
      setTimeImage("afternoon");
    } else if (hours >= 17 && hours < 21) {
      setTimeOfDay("Evening");
      setTimeImage("evening");
    } else {
      setTimeOfDay("Night");
      setTimeImage("night");
    }
  }, []);

  return (
    <div className={`${timeImage} landingDiv`}>
      <h1 style={styles}>Good {timeOfDay}</h1>
      <br />
      <button className="landingButton" href="">
        Create To Do List
      </button>
    </div>
  );
}

export default App;
