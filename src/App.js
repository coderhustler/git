import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {/* Main content goes here */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
