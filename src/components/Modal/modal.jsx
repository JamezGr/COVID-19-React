import React from 'react';
import ReactDOM from 'react-dom';
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

                        <div className="country--placeholder">
                            <img className="country--icon" src={UkFlag} style={{width: "60px"}}/>
                            <div className="country--text__placeholder">
                                <div className="country--text__name">United Kingdom</div>
                                <div className="country--text__lang">English</div>
                            </div>
                        </div>

                        <div className="country--placeholder">
                            <img className="country--icon" src={UkFlag} style={{width: "60px"}}/>
                            <div className="country--text__placeholder">
                                <div className="country--text__name">United Kingdom</div>
                                <div className="country--text__lang">English</div>
                            </div>
                        </div>

                        <div className="country--placeholder">
                            <img className="country--icon" src={UkFlag} style={{width: "60px"}}/>
                            <div className="country--text__placeholder">
                                <div className="country--text__name">United Kingdom</div>
                                <div className="country--text__lang">English</div>
                            </div>
                        </div>

                        <div className="country--placeholder">
                            <img className="country--icon" src={UkFlag} style={{width: "60px"}}/>
                            <div className="country--text__placeholder">
                                <div className="country--text__name">United Kingdom</div>
                                <div className="country--text__lang">English</div>
                            </div>
                        </div>

                        <div className="country--placeholder">
                            <img className="country--icon" src={UkFlag} style={{width: "60px"}}/>
                            <div className="country--text__placeholder">
                                <div className="country--text__name">United Kingdom</div>
                                <div className="country--text__lang">English</div>
                            </div>
                        </div>

                        <div className="country--placeholder">
                            <img className="country--icon" src={UkFlag} style={{width: "60px"}}/>
                            <div className="country--text__placeholder">
                                <div className="country--text__name">United Kingdom</div>
                                <div className="country--text__lang">English</div>
                            </div>
                        </div>

                        <div className="country--placeholder">
                            <img className="country--icon" src={UkFlag} style={{width: "60px"}}/>
                            <div className="country--text__placeholder">
                                <div className="country--text__name">United Kingdom</div>
                                <div className="country--text__lang">English</div>
                            </div>
                        </div>

                        <div className="country--placeholder">
                            <img className="country--icon" src={UkFlag} style={{width: "60px"}}/>
                            <div className="country--text__placeholder">
                                <div className="country--text__name">United Kingdom</div>
                                <div className="country--text__lang">English</div>
                            </div>
                        </div>

                        <div className="country--placeholder">
                            <img className="country--icon" src={UkFlag} style={{width: "60px"}}/>
                            <div className="country--text__placeholder">
                                <div className="country--text__name">United Kingdom</div>
                                <div className="country--text__lang">English</div>
                            </div>
                        </div>

                        <div className="country--placeholder">
                            <img className="country--icon" src={UkFlag} style={{width: "60px"}}/>
                            <div className="country--text__placeholder">
                                <div className="country--text__name">United Kingdom</div>
                                <div className="country--text__lang">English</div>
                            </div>
                        </div>
                        
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