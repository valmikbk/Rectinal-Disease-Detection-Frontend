import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SmartReferral from "./Pages/SmartReferral";
import TreatmentPathways from "./Pages/TreatmentPathways";
import MediCareDashboard from "./Components/MediCareDashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MediCareDashboard />} />
        {/* <Route path="/referral" element={<SmartReferral />} />
        <Route path="/treatment" element={<TreatmentPathways />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
