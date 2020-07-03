import React from 'react';
import ReactDOM from 'react-dom';
import Country from './Countries/country_holder';
import CountriesList from '../../content/countries.json';

import ModalList from './modal_list';

import UkFlag from '../../icons/gb.svg';

class Modal extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            content: ""
        }
    }

    componentDidMount() {
    }

    setActive() {}

    setInactive() {}

    render() {
        return (
            <div id="modal--window">
                <div id="modal--window__title">Select Your Country</div>
                <div id="modal--window__area">
                    <ModalList title="ASIA & PACIFIC" type="COUNTRIES"/> 
                    <ModalList title="ANTARCTICA" type="COUNTRIES"/> 
                    <ModalList title="EUROPE" type="COUNTRIES"/> 
                    <ModalList title="MIDDLE EAST & AFRICA" type="COUNTRIES"/> 
                    <ModalList title="NORTH AMERICA" type="COUNTRIES"/> 
                    <ModalList title="SOUTH AMERICA" type="COUNTRIES"/> 
                </div>
            </div>
        )
    }
}

export default Modal