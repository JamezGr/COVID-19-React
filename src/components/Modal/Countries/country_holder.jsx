import React from 'react';
import ReactDOM from 'react-dom';

import UkFlag from '../../../icons/gb.svg';

class Country extends React.Component {

    render() {
        const {name, language} = this.props 

        return(
            <div className="country--placeholder">
                <img className="country--icon" src={UkFlag} style={{width: "60px"}}/>
                <div className="country--text__placeholder">
                    <div className="country--text__name">{name}</div>
                    <div className="country--text__lang">{language}</div>
                </div>
            </div>
        )
    }
}

export default Country;