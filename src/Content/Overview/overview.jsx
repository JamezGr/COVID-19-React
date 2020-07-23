import React from 'react';

import { UserSettingsStore } from '../../Stores';
import { userSettings } from '../../Reducers/userSettings';
import LineGraph from '../../Components/Charts/chart';


class Overview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDataType: "TOTAL CONFIRMED CASES",
            lineGraph: [] 
        };

        this.dataType = {
            "TOTAL CONFIRMED CASES": "confirmed",
            "TOTAL CONFIRMED DEATHS": "deaths",
            "TOTAL CONFIRMED RECOVERIES": "recovered"
        };

        this.tabsArea = React.createRef();
        this.selectTabData = this.selectTabData.bind(this);
    }

    selectTabData(e) {
        this.tabsArea.current.childNodes.forEach(tab => tab.classList.remove("selected"));
        e.target.classList.add("selected");
    }

    setDefaults = () => {
        const defaultTabSelected = document.querySelector('[data-id=' + this.dataType[this.state.selectedDataType] + ']');
        
        if (defaultTabSelected != null) defaultTabSelected.classList.add("selected");
    }

    subscribe = () => {
        UserSettingsStore.subscribe(() => {
            const UserSettings = UserSettingsStore.getState();

            if (UserSettings.countryName && UserSettings.countryData) this.filterGraphData();
        });
    }

    filterGraphData() {
        const UserSettings = UserSettingsStore.getState();
        const filterType = this.dataType[this.state.selectedDataType];

        let filteredList = [];

        // create X and Y Label Sets for Graphs 
        if (Array.isArray(UserSettings.countryData)) {
            UserSettings.countryData.forEach(record => {
                filteredList.push({count: record[filterType], date: record.date});
            });

            console.log(filteredList)

            this.setState({lineGraph: <LineGraph data={filteredList} className={"dashboard--container__graph"}/>})
        }

        return null
    }

    componentDidMount() {
        this.subscribe();
        this.setDefaults();
    }

    render() {
        return (
            <div>
                <div className="dashboard--content__tabs-area" ref={this.tabsArea} onClick={this.selectTabData}>
                    <div className="dashboard--content__tab" data-id={this.dataType["TOTAL CONFIRMED CASES"]}>Confirmed Cases</div>
                    <div className="dashboard--content__tab" data-id={this.dataType["TOTAL CONFIRMED DEATHS"]}>Confirmed Deaths</div>
                    <div className="dashboard--content__tab" data-id={this.dataType["TOTAL CONFIRMED RECOVERIES"]}>Confirmed Recoveries</div>
                </div>

                <div className="dashboard--content__container-graph">{this.state.lineGraph}</div>
            </div>
        )
    }
}

export default Overview; 