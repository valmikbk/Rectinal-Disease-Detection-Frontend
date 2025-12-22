import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SmartReferral from "./Pages/SmartReferral";
import TreatmentPathways from "./Pages/TreatmentPathways";
// import MediCareDashboard from "./Components/MediCareDashboard";
import MediCareDashboard from './Components/MediCareDashboard';
import SmartReferral from './Components/SmartReferral';
import TreatmentPathways from './Components/TreatmentPathways';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MediCareDashboard />} />
        </Routes>
    </Router>
  );
}
