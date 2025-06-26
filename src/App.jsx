import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TopicPage from './pages/TopicPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/signup';
import CreateTopic from './pages/CreateTopic';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create-topic" element={<CreateTopic />} />
          <Route path="/topic/:id" element={<TopicPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
