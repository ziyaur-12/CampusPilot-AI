import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/public/LandingPage";
import AboutPage from "../pages/public/AboutPage";
import ContactPage from "../pages/public/ContactPage";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import DashboardHome from "../pages/dashboard/DashboardHome";
import ResumeAnalyzer from "../pages/dashboard/ResumeAnalyzer";

function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />

      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={<DashboardHome />}
      />
      <Route
  path="/dashboard/resume"
  element={<ResumeAnalyzer />}
/>
      
    </Routes>
  );
}

export default AppRoutes;