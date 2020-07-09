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

class TopBar extends React.Component {
    render() {
        return (
            <div className="top-bar">
                <div id="top-bar-logo">COVID19 Dashboard</div>
                <div id="top-bar-nav-buttons">
                    <Fab color="primary" aria-label="add" className="fab" title="Change Country">
                        <PublicIcon />
                    </Fab>

                    <Fab color="primary" aria-label="add" className="fab" title="Change Language">
                        <TranslateIcon />
                    </Fab>
                
                    <Fab color="primary" aria-label="add" className="fab" title="Switch to Dark/Light Mode">
                        <Brightness3Icon />
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