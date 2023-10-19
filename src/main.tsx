import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import MyAccount from "./pages/MyAccount";
import ResponsiveAppBar from "./components/NavBar";
import Quests from "./pages/Quests";

const App = () => {
  return (
    <>
      <h1>Welcome to EcoQuest!</h1>
      <p>
        The landing page shows a welcome message and options of daily challenges
        to take on, for example: Recycle Refuse single use plastic (straws,
        cups, silverware) Buy local, in season produce Walk/bike/ take public
        transport Reduce the heating in your home by 2-3 degrees F Spend 2 fewer
        minutes in the shower etc
      </p>
    </>
  );
};

const Root = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <ResponsiveAppBar />
        <div>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="my-account" element={<MyAccount />} />
            <Route path="quests" element={<Quests />} />
          </Routes>
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
};

render(<Root />, document.getElementById("root"));
