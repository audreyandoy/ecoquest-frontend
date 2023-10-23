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
      return 1
    }
  }

  return (
    <>
    <h1>Stats</h1>
      <div>
        <ul>
          <li><h3>Streak Record: {profile_streak()} days</h3></li>
          <li><h3>Points: <b>{profileInfo.total_points}</b> pts</h3></li>
          <li><h3>Carbon Emissions Reduced: <b>{profileInfo.total_co2e_reduced}</b></h3></li>
        </ul>
      </div>
    </>
  );
}

export default ProfileStats;
