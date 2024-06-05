import React from "react";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Deadlines from "./Components/Deadlines";
import ChatbotComponent from "./chatbot/ChatbotComponent";

import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ProjectIdeas from "./Pages/ProjectIdeas";
import About from "./Pages/About";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projectideas" element={<ProjectIdeas />} />
          <Route path="/about" element={<About />} />
          <Route path="/deadlines" element={<Deadlines />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
       
      </BrowserRouter>
    </>
  );
}
