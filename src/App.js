import React from 'react';
import logo from './logo.svg';
import './App.css';

import TopBar from './Components/TopBar/top_bar';
import Footer from './Components/Footer/footer';
import Modal from './Components/Modal/modal';
import Overlay from './Components/Overlay/overlay';

import { setUserOptions } from './Actions';

import LocalStorageHelper from './Helpers/LocalStorageHelper';
import { ModalType, setModalActive, setModalInactive } from './Actions';
import { ModalStore } from './Stores';

let ModalComponent;

ModalStore.subscribe(() => {
  const MODAL_STATE = ModalStore.getState();

  MODAL_STATE.contentType == ModalType.NONE ? ModalComponent = null: ModalComponent = <Modal/>;
});

LocalStorageHelper.hasItem("userCountry") ? ModalStore.dispatch(setModalInactive()): ModalStore.dispatch(setModalActive(ModalType.COUNTRY_LIST))

function App() {

  return (
    <div className="App">
      {ModalComponent ? <Overlay/>: null}
      <TopBar/>
        {ModalComponent}
      <Footer/>
    </div>
  );
}

export default App;
