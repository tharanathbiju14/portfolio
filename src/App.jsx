import Aboutme from "./pages/aboutme";

import Homepage from "./pages/homepage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from "./pages/projects";

export default function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<Aboutme/>} />
      <Route path="/projects" element={<Projects/>} />
      
    </Routes>
  </Router>
  );
}