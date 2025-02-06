import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dogs from './pages/Dogs';
import About from './pages/About';
import Donate from './pages/Donate';
import Payment from './pages/Payment';
import ThankYou from './pages/ThankYou';
import ReportSighting from './pages/ReportSighting';
import ThankYouReport from './pages/ThankYouReport';
import AdminDashboard from './pages/AdminDashboard';
import Volunteer from './pages/Volunteer';
import ThankYouVolunteer from './pages/ThankYouVolunteer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dogs" element={<Dogs />} />
            <Route path="/about" element={<About />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/report-sighting" element={<ReportSighting />} />
            <Route path="/thank-you-report" element={<ThankYouReport />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/thank-you-volunteer" element={<ThankYouVolunteer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App