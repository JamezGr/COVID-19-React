import React from 'react';
import flags from '../../Content/country_flags';
import LocalStorageHelper from '../../Helpers/LocalStorageHelper';

import { UserSettingsStore } from '../../Stores';
import { userSettings } from '../../Reducers/userSettings';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            country: undefined,
            countryCode: undefined,
            language: "English"
        }
    }

    componentDidMount() {
        this.setDefaults();
        this.subscribe();
    }

    subscribe() {
        UserSettingsStore.subscribe(() => {
            const UserSettings = UserSettingsStore.getState();

            const CountryName = UserSettings.countryName;
            const CountryCode = UserSettings.countryCode;

            if (CountryName && CountryCode) this.setCountry(CountryName, CountryCode);
        });
    }

    // check to see if User Settings Found in Local Storage first
    setDefaults = () => {
        if (LocalStorageHelper.hasItem("userCountry")) {
            const DefaultSettings = JSON.parse(LocalStorageHelper.getItem("userCountry"));
            
            this.setState({country: DefaultSettings.name});
            this.setState({countryCode: DefaultSettings.flagCode});

            return true;
        }

        return false;
    }

    setCountry = (country, code) => { 
        this.setState({country: country});
        this.setState({countryCode: code});
    }

    render() {
        return (
            <div className="dashboard--content">
                {this.state.country && this.state.countryCode ? 
                <div className="dashboard--content__title">
                    <img className="country--icon" src={flags[this.state.countryCode]}></img>
                    <span style={{paddingLeft: "15px"}}>{this.state.country}</span>
                </div> : 
                <div className="dashboard--content__title loading"></div>}
            </div>
        )
    }
}

export default Dashboard; 