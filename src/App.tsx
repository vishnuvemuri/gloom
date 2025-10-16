import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Software from './pages/Software';
import Procurement from './pages/Procurement';
import Training from './pages/Training';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/software" element={<Software />} />
        <Route path="/procurement" element={<Procurement />} />
        <Route path="/training" element={<Training />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
