import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import ResultsPage from './pages/ResultsPage';
import VideosPage from './pages/VideosPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import WhatsAppBtn from './components/WhatsAppBtn';
import './App.css';

function App() {
  return (
    <Router basename="/excellent-ai">
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/gallery" element={<VideosPage />} />
          <Route path="/reviews" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <EnquiryModal />
        <WhatsAppBtn />
      </div>
    </Router>
  );
}

export default App;
