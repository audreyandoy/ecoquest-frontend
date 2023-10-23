import React, { useState, useEffect } from "react";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import ActivityLog from "../components/ActivityLog";
import TransportForm from "../components/TransportForm";
import MealsForm from "../components/MealsForm";
import EducationForm from "../components/EducationForm";
import axios from "axios";
import Grid from "@mui/material/Grid";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import Box from "@mui/material/Box";


import ProfileStats from "../components/ProfileStats";
import Achievements from "../components/Achievements";
import Garden from "../components/Garden";

// type HandleFormSubmit = (
//   values: { dropdown: string; distance: string },
//   actions: any
// ) => void;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

const circleStyles: React.CSSProperties = {
  width: "200px",
  height: "200px",
  borderRadius: "50%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#73BB25",
  color: "#fff",
  fontSize: "20px",
  cursor: "pointer",
  textAlign: "center",
};

export default function Quests() {
  const [ecoTransportFormOpen, setEcoTransportFormOpen] = useState(false);
  const [ecoMealFormOpen, setEcoMealFormOpen] = useState(false);
  const [ecoEducationFormOpen, setEcoEducationFormOpen] = useState(false);
  const [text, setText] = useState("");
  const [profileInfo, setProfileInfo] = useState({});

  const handleEcoTransportFormOpen = () => {
    setEcoTransportFormOpen(true);
  };

  const handleEcoTransportFormClose = () => {
    getProfileInfo();
    setEcoTransportFormOpen(false);
  };

  const handleEcoMealFormOpen = () => {
    setEcoMealFormOpen(true);
  };

  const handleEcoMealFormClose = () => {
    getProfileInfo();
    setEcoMealFormOpen(false);
  };

  const handleEcoEducationFormOpen = () => {
    setEcoEducationFormOpen(true);
  };
  
  const handleEcoEducationFormClose = () => {
    setEcoEducationFormOpen(false);
    const response = axios.post(`http://127.0.0.1:8000/api/eco-education`, {
      'points': 5,
      'text': text.text.substring(0,1999), 
      'user': 1
    });
    getProfileInfo();
    console.log("logged to db.")
  };

  const getEducationText = () => {
    axios.get(`http://127.0.0.1:8000/api/eco-education-text/1`).then((res) => {
        console.log(res.data);
        setText(res.data);
      });
}

  const handleFormSubmit: HandleFormSubmit = (values, actions) => {
    // axios POST call here to post activitiy to backend
    actions.resetForm();
    setFormVisible(false);
  };


  const getProfileInfo = () => {
    axios.get(`http://127.0.0.1:8000/api/eco-profile/1`).then((res) => {
      console.log(res.data);
      setProfileInfo(res.data);
    });
  };

  
  useEffect(() => {
    getProfileInfo();
    getEducationText();
}, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 130px",
        marginTop: "70px",
      }}
    >
      <Stack spacing={2}>
        <Item>
          <h1>Quests</h1>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={circleStyles}>
              <button onClick={handleEcoTransportFormOpen}>
                <div>Eco-Friendly Transportation</div>
              </button>
              <Dialog
                open={ecoTransportFormOpen}
                onClose={handleEcoTransportFormClose}
              >
                <DialogTitle>Transportation Form</DialogTitle>
                <DialogContent>
                  <TransportForm />
                </DialogContent>
              </Dialog>
            </div>
            <div style={circleStyles}>
              <button onClick={handleEcoMealFormOpen}>
                <div>Eat Less Meat</div>
              </button>
              {/* <div>Eat Less Meat</div> */}
              <Dialog open={ecoMealFormOpen} onClose={handleEcoMealFormClose}>
                <DialogTitle>Meal Form</DialogTitle>
                <DialogContent>
                  <MealsForm />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleEcoMealFormClose}>Cancel</Button>
                  <Button onClick={handleEcoMealFormClose}>Submit</Button>
                </DialogActions>
              </Dialog>
            </div>
            <div style={circleStyles}>
              <button onClick={handleEcoEducationFormOpen}>
                <div>
                  Learn something new!
                </div>
              </button>
              <Dialog open={ecoEducationFormOpen} onClose={handleEcoEducationFormClose}>
                <DialogTitle>Education Form</DialogTitle>
                <DialogContent>
                  <EducationForm text={text}/>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleEcoEducationFormClose}>Cancel</Button>
                  <Button onClick={handleEcoEducationFormClose}>Submit</Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>
        </Item>
        <Item>
        <Grid container spacing={2}>

            <Grid item xs={6}>
              <Item style={{boxShadow: "none"}}>
                <ProfileStats profileInfo={profileInfo}></ProfileStats>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item style={{boxShadow: "none"}}>
                <Achievements></Achievements>
              </Item>
            </Grid>
            {/* <Grid item xs={12}>
              <Item>
                <Garden></Garden>
              </Item>
            </Grid> */}

        </Grid>

        </Item>
        <Item>
          <h1>Quest Log</h1>
          <ActivityLog />
        </Item>
      </Stack>
    </Box>
  );
}
