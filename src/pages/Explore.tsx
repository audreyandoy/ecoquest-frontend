import { Navigate } from "react-router-dom";
import ActivityLog from "../components/ActivityLog";

function Explore() {
  return (
    <>
      <h1>Choose Your Quest for Today</h1>
      <ActivityLog/>
    </>
  );
}

export default Explore;
