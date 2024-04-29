import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './Contexts/AuthContext';

import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import VolcanoList from './Pages/VolcanoList';
import Volcano from './Pages/Volcano';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {

  return (
    <AuthProvider>
      <Router>
        <div className="App">
            <Navbar /> 
            <Routes>
              <Route path="*" element={<h1>Not Found</h1>} />
              <Route path="/" element={<Home />} />
              <Route path="/volcano-list" element={<div className="content"><VolcanoList /></div>} />
              <Route path="/volcano/:id" element={<div className="content"><Volcano /></div>} />
              <Route path="/login" element={<div className="content"><Login /></div>} />
              <Route path="/register" element={<div className="content"><Register /></div>} />
            </Routes>
          </div>
      </Router>
    </AuthProvider>

  );
}

export default App;