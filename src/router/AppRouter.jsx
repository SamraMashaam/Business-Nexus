import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardInvestor from "../pages/DashboardInvestor";
import DashboardEntrepreneur from "../pages/DashboardEntrepreneur";
import ProfileInvestor from "../pages/ProfileInvestor";
import ProfileEntrepreneur from "../pages/ProfileEntrepreneur";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/investor" element={<DashboardInvestor />} />
        <Route path="/dashboard/entrepreneur" element={<DashboardEntrepreneur />} />
        <Route path="/profile/investor/:id" element={<ProfileInvestor />} />
        <Route path="/profile/entrepreneur/:id" element={<ProfileEntrepreneur />} />
        
        {/* Fallback route for unknown paths */}
        <Route path="*" element={<div className="text-red-500 text-center text-3xl mt-20">404 - Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
