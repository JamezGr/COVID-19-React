import React from 'react';
import logo from './logo.svg';
import './App.css';

import TopBar from './components/TopBar/top_bar';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <TopBar/>
        <div className="content"></div>
      <Footer/>
    </div>
  );
}

export default App;
