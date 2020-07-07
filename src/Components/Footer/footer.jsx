import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import Box from '@material-ui/core/Box';

import CodeIcon from '@material-ui/icons/Code';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-text">
                    Built with <a href="https://reactjs.org/">React.js</a> & <a href="https://material-ui.com/">Material UI</a> 
                </div>     

                <div className="footer-source" style={{ display: 'flex', alignItems: 'center'}}>
                    <span>Source Code &nbsp; </span> <CodeIcon/> 
                </div>
            </div>
        )
    }
}

export default Footer