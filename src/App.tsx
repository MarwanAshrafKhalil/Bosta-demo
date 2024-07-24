import './App.css';
import Tracking from './track';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import i18next from 'i18next';
import { useEffect, useState } from 'react';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState(i18next.language);

  useEffect(() => {
    const handleLanguageChange = () => {
      setCurrentLanguage(i18next.language);
    };

    i18next.on('languageChanged', handleLanguageChange);

    return () => {
      i18next.off('languageChanged', handleLanguageChange);
    };
  }, []);
  return (
    <div dir={currentLanguage == 'ar' ? 'rtl' : 'ltr'}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/track/:id" element={<Tracking />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
