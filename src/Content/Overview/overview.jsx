import React from 'react';

import { UserSettingsStore } from '../../Stores';
import { userSettings } from '../../Reducers/userSettings';
import LineGraph from '../../Components/Charts/chart';


class Overview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDataType: "confirmed",
            lineGraph: null
        };

        this.dataType = {
            "TOTAL CONFIRMED CASES": "confirmed",
            "TOTAL CONFIRMED DEATHS": "deaths",
            "TOTAL CONFIRMED RECOVERIES": "recovered"
        };

        this.tabsArea = React.createRef();
        this.selectTabData = this.selectTabData.bind(this);
    }

    selectTabData = (e) => {
        const dataId = e.target.dataset.id;

        this.tabsArea.current.childNodes.forEach(tab => tab.classList.remove("selected"));
        e.target.classList.add("selected");

        if (dataId !== this.state.selectedDataType) {
            this.setState({selectedDataType: dataId}, function() {
                this.resetGraphData();
                this.filterGraphData();
            })
        }
    }

    setDefaults = () => {
        // add styling to selected tabs
        const defaultTabSelected = document.querySelector('[data-id=' + this.state.selectedDataType + ']');
        if (defaultTabSelected != null) defaultTabSelected.classList.add("selected");
    }

    subscribe = () => {
        UserSettingsStore.subscribe(() => {
            const UserSettings = UserSettingsStore.getState();

            if (UserSettings.countryName && UserSettings.countryData) this.filterGraphData();
        });
    }

    resetGraphData = () => this.setState({lineGraph: null});

    filterGraphData = () => {
        const UserSettings = UserSettingsStore.getState();
        const filterType = this.state.selectedDataType;

        let filteredList = [];

        // create X and Y Label Sets for Graphs 
        if (Array.isArray(UserSettings.countryData)) {
            UserSettings.countryData.forEach((record, index) => {
                const filteredDate = new Date(record.date);
                const [filteredDay, filteredMonth] = [filteredDate.getDate(), filteredDate.toLocaleString('default', { month: 'short'})];

                filteredList.push({count: record[filterType], date: filteredMonth + " " + filteredDay});
            });

            this.setState({lineGraph: <LineGraph data={filteredList} 
                                                className={"dashboard--container__graph"}
                                                lineName={UserSettings.countryName}
                                                labels={true}
                                                legend={false}
                                                tooltips={true}
                                                xAxes={true}
                                                yAxes={true}
                                                backgroundColor={"rgba(0, 0, 0, 0)"}
                                                borderColor={"rgba(124, 28, 4, 1)"}/>})
        }

        return null
    }

    componentDidMount = () => {
        this.subscribe();
        this.setDefaults();
    }

    render() {
        return (
            <div>
                <div className="dashboard--content__tabs-area" ref={this.tabsArea} onClick={this.selectTabData}>
                    <div className="dashboard--content__tab" data-id={this.dataType["TOTAL CONFIRMED CASES"]} title="Confirmed Cases">Confirmed Cases</div>
                    <div className="dashboard--content__tab" data-id={this.dataType["TOTAL CONFIRMED DEATHS"]} title="Confirmed Deaths">Confirmed Deaths</div>
                    <div className="dashboard--content__tab" data-id={this.dataType["TOTAL CONFIRMED RECOVERIES"]} title="Confirmed Recoveries">Confirmed Recoveries</div>
                </div>

                <div className="dashboard--content__container-graph">{this.state.lineGraph}</div>
            </div>
        )
    }
}

export default Overview; 