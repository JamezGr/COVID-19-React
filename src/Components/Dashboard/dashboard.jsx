import React from 'react';
import flags from '../../Content/country_flags';
import LocalStorageHelper from '../../Helpers/LocalStorageHelper';

import InfoCard from '../InfoCard/infocard';
import Container from '../Container/container';
import Overview from '../../Content/Overview/overview';
import DataFeed from '../../Content/DataFeed/data_feed';

import { UserSettingsStore } from '../../Stores';
import { userSettings } from '../../Reducers/userSettings';

import { setCountryData } from '../../Actions';

import API from '../../API/api';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            country: null,
            countryCode: null,
            language: "English",
            countryData: []
        }
    }

    componentDidMount() {
        API.fetchGlobalData();

        this.setDefaults();
        this.subscribe();
    }

    subscribe() {
        UserSettingsStore.subscribe(() => {
            const UserSettings = UserSettingsStore.getState();
            const CountryName = UserSettings.countryName;
            const CountryCode = UserSettings.countryCode;
            const CountryData = UserSettings.countryData;

            if (CountryName && CountryCode) this.setCountry(CountryName, CountryCode);
        });
    }

    // check to see if User Settings Found in Local Storage first
    setDefaults = () => {
        if (LocalStorageHelper.hasItem("userCountry")) {
            const DefaultSettings = JSON.parse(LocalStorageHelper.getItem("userCountry")); 
            
            // API.fetchData(DefaultSettings.name);
            
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

    setCountryData = (updatedRecords) => this.setState({countryData: updatedRecords});

    render() {
        return (
            <div className="dashboard--content">
                {this.state.country && this.state.countryCode ? 
                <div>
                    <div className="dashboard--content__title">
                        <img className="country--icon disabled" src={flags[this.state.countryCode]}></img>
                        <span style={{paddingLeft: "15px"}}>{this.state.country}</span>
                    </div> 

                    <div className="dashboard--content__overview">
                        <InfoCard title="TOTAL CONFIRMED CASES"/>
                        <InfoCard title="TOTAL CONFIRMED DEATHS"/>
                        <InfoCard title="TOTAL CONFIRMED RECOVERIES"/>
                    </div>
                    
                    <div className="dashboard--content__area">
                        <Container height={2} width={2} contents={<Overview/>}/>
                        <Container height={2} width={1} contents={<DataFeed/>}/>
                    </div>

                        
                    
                </div>
                : 
                <div>
                    <div className="dashboard--content__title loading"></div>
                    <div className="dashboard--content__overview loading"></div>
                    <div className="dashboard--content__area loading"></div>
                </div>}
            </div>
        )
    }
}

export default Dashboard; 