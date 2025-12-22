import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import Main from './Components/Main';
import MediCareDashboard from './Components/MediCareDashboard';
import SmartReferral from './Components/SmartReferral';
import TreatmentPathways from './Components/TreatmentPathways';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MediCareDashboard />} />
        </Routes>
    </Router>
  );
}

export default App;