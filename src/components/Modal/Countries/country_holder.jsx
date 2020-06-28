import React from 'react';
import ReactDOM from 'react-dom';

import UkFlag from '../../../icons/gb.svg';
import flags from '../../../content/country_flags';

class Country extends React.Component {

    render() {
        const {name, language, type} = this.props 

        return(
            <div className="country--placeholder">
                <img className="country--icon" title={name} src={flags[type]} style={{width: "60px", height:"40px"}}/>
                <div className="country--text__placeholder">
                    <div className="country--text__name">{name}</div>
                    <div className="country--text__lang">{language}</div>
                </div>
            </div>
        )
    }
}

export default Country;