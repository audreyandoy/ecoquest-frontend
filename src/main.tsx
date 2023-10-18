import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import MyAccount from "./pages/MyAccount";
import Navbar from "./components/NavBar";
import Explore from "./pages/Explore";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";

const App = (): JSX.Element => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </React.StrictMode>
  );
};

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<App />);
