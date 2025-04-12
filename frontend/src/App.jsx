import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminRoutes from "./routes/AdminRoutes";
import DonorRoutes from "./routes/DonorRoutes";
import ReceiverRoutes from "./routes/ReceiverRoutes"; // Add receiver routes here
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Welcome />} />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Admin Routes */}
        <Route path="/admin/*" element={<AdminRoutes />} />

        {/* Donor Routes */}
        <Route path="/donor/*" element={<DonorRoutes />} />

        {/* Receiver Routes */}
        <Route path="/receiver/*" element={<ReceiverRoutes />} />
      </Routes>

      {/* Toast notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Router>
  );
}

export default App;
