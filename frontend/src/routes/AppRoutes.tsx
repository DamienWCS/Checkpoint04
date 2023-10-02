import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Menu from "@/pages/Menu";
import Réservation from "@/pages/Réservation";
import Contact from "@/pages/Contact";
import Dashboard from "@/pages/Dashboard";


const AppRoutes = () => {
  return (
    <div>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Réservation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
