import { Navigate } from "react-router-dom";
import axios from "axios";

function Explore() {
  axios.get(`http://127.0.0.1:8000/api/`).then((res) => console.log(res));

  return (
    <>
      <h1>Choose Your Quest for Today</h1>
    </>
  );
}

export default Explore;
