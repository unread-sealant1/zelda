import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/organisms/Navbar';
import LandingPage from './pages/LandingPage';
import TimelinePage from './pages/TimelinePage';
import GalleryPage from './pages/GalleryPage';
import VideoGallery from './pages/VideoGallery';
import MemoriesPage from './pages/MemoriesPage';
import LettersPage from './pages/LettersPage';
import FuturePage from './pages/FuturePage';
import CourtCasePage from './pages/CourtCasePage';
import FinalPage from './pages/FinalPage';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/videos" element={<VideoGallery />} />
          <Route path="/memories" element={<MemoriesPage />} />
          <Route path="/letters" element={<LettersPage />} />
          <Route path="/future" element={<FuturePage />} />
          <Route path="/court-case" element={<CourtCasePage />} />
          <Route path="/final" element={<FinalPage />} />
          <Route path="*" element={<div style={{padding: '2rem', textAlign: 'center'}}>Coming Soon...</div>} />
        </Routes>
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
