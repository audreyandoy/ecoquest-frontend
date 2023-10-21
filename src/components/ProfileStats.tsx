import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ProfileStats() {
  const [userStats, setuserStats] = useState([]);

  const getUserStats = () => {
    // axios.get(`http://127.0.0.1:8000/api/eco-transport`).then((res) => {
    //   console.log(res.data);
    //   setActivityList(res.data);
    // });
  };

  useEffect(() => {
    // getTransportationActivities();
  }, []);

  return (
    <>
      <div>
        <h2>Streak Record 5 day</h2>
        <h2>Points: 600 pts</h2>
        <h2>Carbon Emissions Reduced: 321</h2>
      </div>
    </>
  );
}

export default ProfileStats;
