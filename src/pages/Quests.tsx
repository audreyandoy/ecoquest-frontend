
import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import ActivityLog from "../components/ActivityLog";
import TransportForm from "../components/TransportForm";
import MealsForm from "../components/MealsForm";
import EducationForm from "../components/EducationForm";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import Box from "@mui/material/Box";

type HandleFormSubmit = (
  values: { dropdown: string; distance: string },
  actions: any
) => void;


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

  const handleEcoTransportFormOpen = () => {
    setEcoTransportFormOpen(true)
  };

  const handleEcoTransportFormClose = () => {
    setEcoTransportFormOpen(false);
  };

  const handleEcoMealFormOpen = () => {
    setEcoMealFormOpen(true);
  };

  const handleEcoMealFormClose = () => {
    setEcoMealFormOpen(false);
  };

  const handleEcoEducationFormOpen = () => {
    setEcoEducationFormOpen(true);
  };

  const handleEcoEducationFormClose = () => {
    setEcoEducationFormOpen(false);
  };


  const handleFormSubmit: HandleFormSubmit = (values, actions) => {
    // axios POST call here to post activitiy to backend

    actions.resetForm();
    setFormVisible(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: "0 130px",
      }}
    >
      <Stack spacing={2}>
        <Item>
          <h1>Quests</h1>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={circleStyles}>

              <button onClick={handleEcoTransportFormOpen}>
                <div>
                  Eco-Friendly Transportation
                </div>
              </button>
              <Dialog open={ecoTransportFormOpen} onClose={handleEcoTransportFormClose}>
                <DialogTitle>Transportation Form</DialogTitle>
                <DialogContent>
                  <TransportForm />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleEcoTransportFormClose}>Cancel</Button>
                  <Button onClick={handleEcoTransportFormClose}>Submit</Button>
                </DialogActions>
              </Dialog>
            </div>
            <div style={circleStyles}>
              <button onClick={handleEcoMealFormOpen}>
                <div>
                  Eat Less Meat
                </div>
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
                  <EducationForm/>
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
          <h1>EcoQuests</h1>I Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Provident ipsa voluptas temporibus aliquam distinctio, possimus
          vero nisi unde nemo, cumque, tempora aperiam quos adipisci ut quam
          beatae quas consectetur minus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Provident ipsa voluptas temporibus aliquam
          distinctio, possimus vero nisi unde nemo, cumque, tempora aperiam quos
          adipisci ut quam beatae quas consectetur minus. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Provident ipsa voluptas temporibus
          aliquam distinctio, possimus vero nisi unde nemo, cumque, tempora
          aperiam quos adipisci ut quam beatae quas consectetur minus.
        </Item>
        <Item>
          <h1>Quest Log</h1>
          <ActivityLog />
          
        </Item>
      </Stack>
    </Box>
  );
}
