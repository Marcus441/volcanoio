import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './LandingPage';
import Navbar from './Navbar';
import Home from './Home';
import VolcanoList from './VolcanoList';


function App() {

  return (

    <Router>
      <div className="App">
        <div className="content">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path='/home' element={<Home />} />
            <Route path="/volcano-list" element={<VolcanoList />} /> 
            {/* <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;