import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ActivityLog() {
  const [activityList, setActivityList] = useState([]);

  // make a response to http://127.0.0.1:8000/
  const getTransportationActivities = () => {
    axios.get(`http://127.0.0.1:8000/api/eco-transport`).then((res) => {
      console.log(res.data);
      setActivityList(res.data);
    });
  };

  const activityElements = activityList.map((act) => {
    return (
      <li>
        <ul>
          {act.activity_date}: {act.activity} {act.distance} miles
        </ul>
      </li>
    );
  });

  useEffect(() => {
    getTransportationActivities();
  }, []);

  return (
    <>
      <h3>Activity Log</h3>
      {activityElements}
    </>
  );
}

export default ActivityLog;
