import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ActivityLog from "../components/ActivityLog";

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
              <div>Eco Friendly Transportation</div>
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
