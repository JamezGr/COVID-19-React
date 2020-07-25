import React from 'react';
import CountryList from '../all_countries';
import CountryFlags from '../country_flags';

import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';

class DataFeedItem extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isVisible: true
        }
    }

    toggleVisibility = () => this.setState({isVisible: !this.state.isVisible});


    render() {
        return (
            <div className="dashboard--content__selectable-item">
                <div className="selectable-item__name" style={{width: "80%", display: "table"}}>
                    <img className="country--icon" src={CountryFlags.SG} style={{border: "2px solid black"}}></img>
                    <span style={{paddingLeft: "10px", fontWeight: "bold", fontSize: "large", color: "#606c76", display: "table-cell", verticalAlign: "middle"}}>SINGAPORE</span>
                </div>
                

                <div className="selectable-item__controls">
                    <span className="selectable-item__toggle-visibility" title="Toggle Visibility" onClick={this.toggleVisibility}>
                        {this.state.isVisible === true ? <VisibilityIcon/> : <VisibilityOffIcon/>}
                    </span>
                    <span className="selectable-item__delete" title="Delete Item"><DeleteIcon/></span>
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
            selectedCountries: []
        }

        this.tabsArea = React.createRef();

        this.countryList = Object.values(CountryList["All Countries"]);
        this.countryFlags = CountryFlags;
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
    }

    componentDidMount = () => {
        this.setDefaults();
    }


    render() {
        return (
            <div>
                <div className="dashboard--content__tabs-area" ref={this.tabsArea} onClick={this.selectTabData}>
                    <div className="dashboard--content__tab" data-id="compare-country">Compare Countries</div>
                    <div className="dashboard--content__tab" data-id="news-feed">News Feed</div>
                </div>

                <div><DataFeedItem/></div>
            </div>   
        )
    }
}

export default DataFeed;