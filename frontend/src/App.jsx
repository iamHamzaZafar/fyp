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
import DiscussionComponent from "./Components/DiscussionComponent";
import SupervisorSelection from "./Components/SupervisorSelection";
import SupervisorApproval from "./Components/SupervisorApproval";
import AppointmentBooking from "./Components/AppointmentBooking";
import SupervisorAppointments from "./Components/SupervisorAppointments";
import SupervisorStreams from "./Components/SupervisorStreams";
import StudentUpload from "./Components/StudentUpload";

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
          {/* Students Routes  */}
          {/* {Protected Routes of Students} */}

          <Route path="/discuss" element={<DiscussionComponent />} />
          <Route path="/selection" element={<SupervisorSelection />} />
          <Route path="/appointment" element={<AppointmentBooking />} />
          <Route path="/uploads" element={<StudentUpload />} />


          {/* Supervisors Routes */}
          {/* {Protected Routes of Supervisors} */}

          <Route path="/approval" element={<SupervisorApproval />} />
          <Route path="/apintreq" element={<SupervisorAppointments />} />
          <Route path="/creatsubmission" element={<SupervisorStreams />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
       
      </BrowserRouter>
    </>
  );
}
