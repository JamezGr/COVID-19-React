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
        console.log(CountriesList.Europe);
    }

    setActive() {}

    setInactive() {}

    render() {
        return (
            <div id="modal--window">
                <div id="modal--window__title">Select Your Country</div>
                <div id="modal--window__area">
                    <ModalList title="ASIA & PACIFIC"/> 
                    <ModalList title="CIS"/> 

                    <div className="modal--list">
                        <div className="separator"></div>
                        <div className="modal--list__title">EUROPE</div>
                        <div className="modal--list__container">
                            <Country name="United Kingdom" language="English"/>
                            <Country name="United Kingdom" language="English"/>
                            <Country name="United Kingdom" language="English"/>
                            <Country name="United Kingdom" language="English"/>
                            <Country name="United Kingdom" language="English"/>
                            <Country name="United Kingdom" language="English"/>
                            <Country name="United Kingdom" language="English"/>
                            <Country name="United Kingdom" language="English"/>
                        </div>
                    </div>

                    <ModalList title="MIDDLE EAST & AFRICA"/> 
                    <ModalList title="NORTH AMERICA"/> 
                    <ModalList title="SOUTH AMERICA"/> 
                </div>
            </div>
        )
    }
}

export default Modal