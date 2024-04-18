import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import LandingPage from './Pages/LandingPage';
import VolcanoList from './Pages/VolcanoList';
import Volcano from './Pages/Volcano';

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
            <Route path="/volcano/:id" element={<Volcano />} /> 
            {/* <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;