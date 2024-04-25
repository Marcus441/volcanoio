import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './Contexts/AuthContext';

import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import LandingPage from './Pages/LandingPage';
import VolcanoList from './Pages/VolcanoList';
import Volcano from './Pages/Volcano';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <div className="content">
            <Navbar />
            <Routes>
              <Route path="*" element={<h1>Not Found</h1>} />
              <Route path="/" element={<LandingPage />} />
              <Route path='/home' element={<Home />} />
              <Route path="/volcano-list" element={<VolcanoList />} />
              <Route path="/volcano/:id" element={<Volcano />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>

  );
}

export default App;