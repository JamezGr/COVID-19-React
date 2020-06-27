import React from 'react';
import logo from './logo.svg';
import './App.css';

import TopBar from './components/TopBar/top_bar';
import Footer from './components/Footer/footer';
import Modal from './components/Modal/modal';

function App() {
  if (localStorage.getItem("country") === null) localStorage.setItem("country", "UK");
  console.log(localStorage);
  
  let modal;
  modal = <Modal/>;

  return (
    <div className="App">
      <div id="overlay"></div>
      <TopBar/>
        {modal}
      <Footer/>
    </div>
  );
}

export default App;
