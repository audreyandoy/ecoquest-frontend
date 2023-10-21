import { Navigate } from "react-router-dom";


import { useState, useEffect } from "react";
import axios from "axios";

function ProfileStats({profileInfo}) {
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

  const profile_streak = () => {
    const streak = profileInfo.streak 
    if (streak == null) {
      return 0
    }
  }

  return (
    <>
    <h1>Stats</h1>
      <div>
        <h2>Streak Record: {profile_streak()} days</h2>
        <h2>Points: {profileInfo.total_points} pts</h2>
        <h2>Carbon Emissions Reduced: {profileInfo.total_co2e_reduced}</h2>
      </div>
    </>
  );
}

export default ProfileStats;
