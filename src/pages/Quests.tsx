import { Navigate } from "react-router-dom";
import ActivityLog from "../components/ActivityLog";

function Quests() {
  return (
    <>
      <h1>Choose Your Quest for Today</h1>
      <ActivityLog />
    </>
  );
}

export default Quests;
