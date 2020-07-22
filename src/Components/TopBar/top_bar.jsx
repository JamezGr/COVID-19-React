import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import Box from '@material-ui/core/Box';

import PublicIcon from '@material-ui/icons/Public';
import TranslateIcon from '@material-ui/icons/Translate';
import InfoIcon from '@material-ui/icons/Info';
import TimelineIcon from '@material-ui/icons/Timeline';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

import { ModalType, setModalActive, setModalInactive } from '../../Actions';
import { ModalStore } from '../../Stores';


class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.changeCountry = this.changeCountry.bind(this);
        this.state = {
            isDarkMode: false
        }
    }  

    changeCountry = () => ModalStore.dispatch(setModalActive(ModalType.COUNTRY_LIST));
    toggleDarkMode = () => this.setState({isDarkMode: !this.state.isDarkMode});

    render() {
        return (
            <div className="top-bar">
                <div id="top-bar-logo">COVID19 Dashboard</div>
                <div id="top-bar-nav-buttons">
                    <Fab color="primary" aria-label="add" className="fab" title="Change Country" onClick={this.changeCountry}>
                        <PublicIcon />
                    </Fab>

                    <Fab color="primary" aria-label="add" className="fab" title="Change Language">
                        <TranslateIcon />
                    </Fab>
                
                    <Fab color="primary" aria-label="add" className="fab" title="Switch to Dark/Light Mode" onClick={this.toggleDarkMode}>
                        {this.state.isDarkMode ? <WbSunnyIcon/>: <Brightness3Icon />}
                    </Fab>
                
                    <Fab color="primary" aria-label="add" className="fab" title="About">
                        <InfoIcon />
                    </Fab>                    
                </div>
            </div>
        )
    }
}

export default TopBar