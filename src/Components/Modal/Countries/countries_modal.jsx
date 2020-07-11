import React from 'react';
import ReactDOM from 'react-dom';

import ModalList from '../modal_list';
import { ModalType, setModalActive, setModalInactive } from '../../../Actions';

import { ModalStore } from '../../../Stores';

class CountriesModal extends React.Component {

    render() {
        return(
            <div id="modal--window" ref="modal_window">             
                <div id="modal--window__title">Select Your Country</div>
                <div id="modal--window__area">
                    <ModalList title="ASIA & PACIFIC" type="COUNTRIES" key="ASIA_PACIFIC"/> 
                    <ModalList title="ANTARCTICA" type="COUNTRIES" key="ANTARCTICA"/> 
                    <ModalList title="EUROPE" type="COUNTRIES" key="EUROPE"/> 
                    <ModalList title="MIDDLE EAST & AFRICA" type="COUNTRIES" key="MIDDLE_EAST_AFRICA"/> 
                    <ModalList title="NORTH AMERICA" type="COUNTRIES" key="NORTH_AMERICA"/> 
                    <ModalList title="SOUTH AMERICA" type="COUNTRIES" key="SOUTH_AMERICA"/> 
                </div>
            </div>
        )
    }
}

export default CountriesModal;