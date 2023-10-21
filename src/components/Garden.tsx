import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Garden() {

  useEffect(() => {
    // getTransportationActivities();
  }, []);

  return (
    <>
      <h1>Eco Garden</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <h3>Water</h3> <h3>Sun</h3> <h3>Decorate</h3>
        <div style={{width: "100%"}}>
            🌲🌸
        </div>

      </div>
    </>
  );
}

export default Garden;
