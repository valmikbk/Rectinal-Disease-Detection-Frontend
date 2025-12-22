import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './Components/Main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        </Routes>
    </Router>
  );
}

export default App;
