// This is the main component of the application. It is the parent component of all other components.
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';

import './App.css';
import LandingPage from './LandingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/volcanoList" element={<VolcanoList />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} /> */}
        </Routes>
      </div>
    </Router>

  );
}

export default App;
