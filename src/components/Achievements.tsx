import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Achievements() {
  const circleStyles: React.CSSProperties = {
    width: "7em",
    height: "7em",
    borderRadius: "50%",
    display: "flex",
    margin: ".5em",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#73BB25",
    color: "#fff",
    fontSize: "20px",
    cursor: "pointer",
    textAlign: "center",
  };

  useEffect(() => {
    // getTransportationActivities();
  }, []);

  return (
    <>
      <h1>Achievements</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={circleStyles}>
          <div>Weekend Warrior</div>
        </div>
        <div style={circleStyles}>
          <div>100 point champ</div>
        </div>
      </div>
    </>
  );
}

export default Achievements;
