import React from 'react';
import CountryList from '../all_countries';
import CountryFlags from '../country_flags';

import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CloseIcon from '@material-ui/icons/Close';

import { toggleCountryVisibility } from '../../Actions';
import { UserSettingsStore } from '../../Stores';


class DataFeedItem extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isVisible: true,
            isDeletable: false
        }
    }

    toggleVisibility = () => {
        this.setState({isVisible: !this.state.isVisible});
    };
    
    componentDidMount = () => {
        if (this.props.deletable) this.setState({isDeletable: this.props.deletable});
    }

    render() {
        const {flag, name, deletable} = this.props;

        return (
            <div className="dashboard--content__selectable-item">
                <div className="selectable-item__name" style={{width: "80%", display: "table"}}>
                    <img className="country--icon disabled" src={CountryFlags[this.props.flag]}></img>
                    <span style={{paddingLeft: "10px", fontWeight: "bold", fontSize: "large", color: "#606c76", display: "table-cell", verticalAlign: "middle"}}>{this.props.name}</span>
                </div>
                

                <div className="selectable-item__controls">
                    <span className="selectable-item__toggle-visibility" title="Toggle Visibility" onClick={this.toggleVisibility}>
                        {this.state.isVisible === true ? <VisibilityIcon/> : <VisibilityOffIcon/>}
                    </span>
                    <span className={this.state.isDeletable ? "selectable-item__delete" : "selectable-item__delete btnDisabled"} title="Delete Item"><DeleteIcon/></span>
                </div>
            </div>
        )
    }
}

class DataFeed extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDataType: "compare-country",
            selectedCountries: [],
            searchResults: [],
            isSearching: false
        }

        this.tabsArea = React.createRef();
        this.searchBar = React.createRef();
        
        this.countryFlagList = Object.keys(CountryList["All Countries"])
        this.countryList = Object.values(CountryList["All Countries"]);
        this.countryFlagImages = CountryFlags;
    }

    autocomplete = (e) => {
        let results = [];

        if (e.target.value) {
            results = this.countryList.filter(country => {return country.toUpperCase().includes(e.target.value.toUpperCase())});
        }

        e.target.value.length !== 0 ? this.setState({isSearching: true}) : this.setState({isSearching: false});

        console.log(results);
        results = results.length >= 5 ? results.slice(0,6): results;
        this.setState({searchResults: results});
    }

    addCountry = (e) => {
        const CountryToAdd = e.currentTarget.dataset.country;
        const CountryFlag = this.countryFlagList[this.countryList.indexOf(CountryToAdd)];

        console.log(CountryFlag);

        this.setState({
            selectedCountries: [...this.state.selectedCountries, <DataFeedItem flag={CountryFlag} name={CountryToAdd} deletable={true}/>],
            searchResults: [],
            isSearching: false
        });

        this.searchBar.current.value = "";
    }

    clearSearch = () => {
        this.searchBar.current.value = "";
        this.setState({isSearching: false});
    }

    selectTabData = (e) => {
        const dataId = e.target.dataset.id;

        if (dataId) {
            this.tabsArea.current.childNodes.forEach(tab => tab.classList.remove("selected"));
            e.target.classList.add("selected");
        }
    }

    setDefaults = () => {
        const defaultTabSelected = document.querySelector('[data-id=' + this.state.selectedDataType + ']');
        if (defaultTabSelected != null) defaultTabSelected.classList.add("selected");

        UserSettingsStore.subscribe(() => {
            const UserSettings = UserSettingsStore.getState();
            
            const CountryName = UserSettings.countryName;
            const CountryCode = UserSettings.countryCode;

            if (CountryName && CountryCode) this.setState({selectedCountries: [<DataFeedItem flag={CountryCode} name={CountryName}/>]});
        });
    }

    componentDidMount = () => {
        this.setDefaults();
    }


    render() {
        return (
            <div style={{position: "relative"}}>
                <div className="dashboard--content__tabs-area" ref={this.tabsArea} onClick={this.selectTabData}>
                    <div className="dashboard--content__tab" data-id="compare-country">Compare Countries</div>
                    <div className="dashboard--content__tab" data-id="news-feed">News Feed</div>
                </div>

                <div className="dashboard--content__country-search-bar">
                    <input type="text" className="dashboard--content__country-search" ref={this.searchBar} placeholder="Search for a Country..." onChange={this.autocomplete}></input>
                    {this.state.isSearching ? <span className="dashboard--content__country-search-clear" onClick={this.clearSearch}><CloseIcon/></span> : null}
                </div>

                {this.state.searchResults.length != 0 && this.state.isSearching ? 
                    <div className="dashboard--content__country-search-results">
                        {this.state.searchResults.map(result => {
                            return <div className="dashboard--content__country-result" data-country={result} onClick={this.addCountry}>
                                <img style={{width: "40px", paddingRight: "10px"}} src={this.countryFlagImages[this.countryFlagList[this.countryList.indexOf(result)]]}></img>
                                <span>{result}</span>
                            </div>})
                        }
                    </div> : null
                }

                <div className="dashboard--content__selected-countries">
                    {this.state.selectedCountries.map(country => country)}
                </div>
            </div>   
        )
    }
}

export default DataFeed;