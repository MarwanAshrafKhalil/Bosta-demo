import './App.css';
import Tracking from './track';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/track/:id" element={<Tracking />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
