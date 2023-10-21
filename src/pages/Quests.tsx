import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import ActivityLog from "../components/ActivityLog";
import TransportForm from "../components/TransportForm";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

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
  backgroundColor: "#73BB25", // Set the background color of the circle
  color: "#fff", // Text color
  fontSize: "20px",
  cursor: "pointer",
  textAlign: "center",
};

const transparentBoxStyles: React.CSSProperties = {
  background: "transparent", // Set the background of the inner box to transparent
  padding: "20px", // Adjust padding as needed
};

export default function Quests() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
              <button onClick={handleOpen}>
                <div style={transparentBoxStyles}>
                  Eco-Friendly Transportation
                </div>
              </button>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Transportation Form</DialogTitle>
                <DialogContent>
                  <TransportForm />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={handleClose}>Submit</Button>
                </DialogActions>
              </Dialog>
            </div>
            <div style={circleStyles}>
              <div>Eat Less Meat</div>
            </div>
            <div style={circleStyles}>
              <div>Learn about Sustainable Practices</div>
            </div>
          </div>
        </Item>
        <Item>
          <h1>EcoQuests</h1>I Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Provident ipsa voluptas temporibus aliquam distinctio, possimus
          vero nisi unde nemo, cumque, tempora aperiam quos adipisci ut quam
          beatae quas consectetur minus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Provident ipsa voluptas temporibus aliquam.
        </Item>
        <Item>
          <h1>Quest Log</h1>
          <ActivityLog />
        </Item>
      </Stack>
    </Box>
  );
}
