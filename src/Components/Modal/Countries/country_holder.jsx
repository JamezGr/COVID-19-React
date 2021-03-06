import React from 'react';
import ReactDOM from 'react-dom';

import { findDOMNode, render } from 'react-dom';

import flags from '../../../Content/country_flags';
import LocalStorageHelper from '../../../Helpers/LocalStorageHelper';

import { ModalStore } from '../../../Stores';
import { UserSettingsStore } from '../../../Stores';

import { setUserCountry, setLoadStatus, UserSettings } from '../../../Actions';
import { setModalInactive } from '../../../Actions';

import { LoadStatus } from '../../../Reducers/userSettings';

import API from '../../../API/api';

class Country extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            setCountry: this.setCountry.bind(this)
        }
    }

    setCountry = (e) => {
        const userCountry = {
            name: e.target.dataset.country,
            flagCode: e.target.dataset.flag
        }

        LocalStorageHelper.setItem('userCountry', JSON.stringify(userCountry));
        ModalStore.dispatch(setModalInactive());
        UserSettingsStore.dispatch(setUserCountry(userCountry.name, userCountry.flagCode));
        UserSettingsStore.dispatch(setLoadStatus(LoadStatus.LOADED));

        // API.fetchData(userCountry.name);
        
        console.log("LocalStorage", window.localStorage)
    }

    render() {
        const {name, language, type} = this.props 

        return(
            <div className="country--placeholder">
                <img className="country--icon" title={name} src={flags[type]} data-flag={type} data-country={name} onClick={this.setCountry}/>
                <div className="country--text__placeholder">
                    <div className="country--text__name">{name}</div>
                    <div className="country--text__lang">{language}</div>
                </div>
            </div>
        )
    }
}

export default Country;