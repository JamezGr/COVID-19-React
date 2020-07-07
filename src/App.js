import React from 'react';
import logo from './logo.svg';
import './App.css';

import TopBar from './Components/TopBar/top_bar';
import Footer from './Components/Footer/footer';
import Modal from './Components/Modal/modal';
import { setUserOptions } from './Actions';

import { ModalSettings, ModalState, ModalType, setModalActive, setModalInactive } from './Actions';
import { modal } from './Reducers/modal';

import { createStore } from 'redux'

let ModalComponent;

const modalStore = createStore(modal);

modalStore.subscribe(() => {
  const MODAL_STATE = modalStore.getState();

  if (MODAL_STATE.contentType == ModalType.NONE) ModalComponent = null;
  if (MODAL_STATE.contentType == ModalType.COUNTRY_LIST) ModalComponent = <Modal/>;

  console.log("Updated State:", MODAL_STATE.contentType);
});

modalStore.dispatch(setModalActive(ModalType.COUNTRY_LIST));

function App() {

  return (
    <div className="App">
      {ModalComponent != null ? <div id="overlay"></div>: null}
      <TopBar/>
        {ModalComponent}
      <Footer/>
    </div>
  );
}

export default App;
