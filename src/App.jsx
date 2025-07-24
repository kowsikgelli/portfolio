import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ColorModeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Contact from './pages/Contact';
import { Container } from '@mui/material';

function App() {
  return (
    <ColorModeProvider>
      <Router>
        <Navbar />
        <Container maxWidth="lg" sx={{ mt: 10, mb: 4, pt: 4 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
      </Router>
    </ColorModeProvider>
  );
}

export default App;
