import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import TopBar from './Components/TopBar/top_bar';
import Dashboard from './Components/Dashboard/dashboard';
import Footer from './Components/Footer/footer';
import Modal from './Components/Modal/modal';
import Overlay from './Components/Overlay/overlay';

function App() {

  return (
    <div className="App">
      <Overlay/>
      <TopBar/>
        <Dashboard/>
        <Modal/>
      <Footer/>
    </div>
  );
}

export default App;
