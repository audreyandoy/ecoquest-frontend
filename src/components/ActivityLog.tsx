import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ActivityLog() {
  const [activityList, setActivityList] = useState([]);

  const getTransportationActivities = () => {
    axios.get(`http://127.0.0.1:8000/api/eco-transport`).then((res) => {
      console.log(res.data);
      setActivityList(res.data);
    });
  };

  useEffect(() => {
    getTransportationActivities();
  }, []);

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {activityList.map((act, index) => (
          <div key={index} style={{ flexBasis: "33.33%", padding: "8px" }}>
            {act.activity_date}: {act.activity} {act.distance} miles
          </div>
        ))}
      </div>
    </>
  );
}

export default ActivityLog;
