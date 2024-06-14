import React from 'react';
import './App.css';
import Header from './Header.js';
import Banner from './Banner.js';
import ProductList from './ProductList.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
