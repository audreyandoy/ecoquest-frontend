import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import MyAccount from "./pages/MyAccount";
import Navbar from "./components/NavBar";
import Explore from "./pages/Explore";

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
      <Navbar />
    </>
  );
};

const Root = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="my-account" element={<MyAccount />} />
          <Route path="explore" element={<Explore />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

render(<Root />, document.getElementById("root"));
