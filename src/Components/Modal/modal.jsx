import React from 'react';
import ReactDOM from 'react-dom';
import Country from './Countries/country_holder';
import CountriesList from '../../Content/countries.json';

import ModalList from './modal_list';
import { ModalType, setModalActive, setModalInactive } from '../../Actions';

import { ModalStore } from '../../Stores';

class Modal extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            isVisible: true
        }
    }

    componentDidMount() {
        this.checkState();
    }

    checkState() {
        ModalStore.subscribe(() => {
            const MODAL_STATE = ModalStore.getState();
            MODAL_STATE.contentType == ModalType.NONE? this.setInactive(): this.setActive();
        });
    }

    setActive = () => this.setState({isVisible: true});

    setInactive = () => this.setState({isVisible: false});

    render() {
        return (
            this.state.isVisible ? <div id="modal--window" ref="modal_window">
                                        <div id="modal--window__title">Select Your Country</div>
                                        <div id="modal--window__area">
                                            <ModalList title="ASIA & PACIFIC" type="COUNTRIES"/> 
                                            <ModalList title="ANTARCTICA" type="COUNTRIES"/> 
                                            <ModalList title="EUROPE" type="COUNTRIES"/> 
                                            <ModalList title="MIDDLE EAST & AFRICA" type="COUNTRIES"/> 
                                            <ModalList title="NORTH AMERICA" type="COUNTRIES"/> 
                                            <ModalList title="SOUTH AMERICA" type="COUNTRIES"/> 
                                        </div>
                                    </div>: null
        )
    }
}

export default Modal

export const ModalTypes = {
    SELECT_COUNTRY: 'select-country',
    SELECT_LANGUAGE: 'select-language',
    INFO: 'info-about'
}