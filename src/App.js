import React from 'react';
import logo from './logo.svg';
import './App.css';

import TopBar from './components/TopBar/top_bar';
import Footer from './components/Footer/footer';
import Modal from './components/Modal/modal';

function App() {
  return (
    <div className="App">
      <TopBar/>
        <Modal/>
      <Footer/>
    </div>
  );
}

export default App;
