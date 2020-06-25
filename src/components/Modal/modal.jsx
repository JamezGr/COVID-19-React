import React from 'react';
import ReactDOM from 'react-dom';
import Country from './Countries/country_holder';

import UkFlag from '../../icons/gb.svg';

class Modal extends React.Component{
    render() {
        return (
            <div id="modal--window">
                <div id="modal--window__title">Select Your Country</div>
                <div className="modal--list">
                    <div className="separator"></div>
                    <div className="modal--list__title">ASIA & PACIFIC</div>
                </div>

                <div className="modal--list">
                    <div className="separator"></div>
                    <div className="modal--list__title">CIS</div>
                </div>

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

                <div className="modal--list">
                    <div className="separator"></div>
                    <div className="modal--list__title">MIDDLE EAST & AFRICA</div>
                </div>

                <div className="modal--list">
                    <div className="separator"></div>
                    <div className="modal--list__title">NORTH AMERICA </div>
                </div>

                <div className="modal--list">
                    <div className="separator"></div>
                    <div className="modal--list__title">SOUTH AMERICA </div>
                </div>
            </div>
        )
    }
}

export default Modal