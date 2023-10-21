import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
// import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
// import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import axios from "axios";


import ProfileStats from "../components/ProfileStats";
import Achievements from "../components/Achievements";
import Garden from "../components/Garden";

export default function MyAccount(): JSX.Element {
  const navigate = useNavigate();

  const [profileInfo, setProfileInfo] = useState({});

  const getProfileInfo = () => {
    axios.get(`http://127.0.0.1:8000/api/eco-profile/1`).then((res) => {
      console.log(res.data);
      setProfileInfo(res.data);
    });
  };

  useEffect(() => {
    getProfileInfo();
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(4),
    textAlign: "left",
    color: theme.palette.text.secondary,
    height: "80%"
  }));

  return (
    <>
      <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: "0 80px",
      }}
    >
      <Grid container spacing={2}>

        <Grid item xs={6}>
          <Item>
            <ProfileStats profileInfo={profileInfo}></ProfileStats>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Achievements></Achievements>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <Garden></Garden>
          </Item>
        </Grid>

      </Grid>


    </Box>
    </>
  );
}
