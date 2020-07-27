import React from 'react';
import LineGraph from '../Charts/chart';
import { UserSettingsStore } from '../../Stores';
import { userSettings } from '../../Reducers/userSettings';

import CountUp from 'react-countup';

class InfoCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            lineGraph: [],
            currentCount: "",
            increaseCount: "" 
        }

        this.infoDescription = {
            "TOTAL CONFIRMED CASES": "Cases",
            "TOTAL CONFIRMED DEATHS": "Deaths",
            "TOTAL CONFIRMED RECOVERIES": "Recoveries"
        }

        this.dataType = {
            "TOTAL CONFIRMED CASES": "confirmed",
            "TOTAL CONFIRMED DEATHS": "deaths",
            "TOTAL CONFIRMED RECOVERIES": "recovered"
        }
    }

    componentDidMount() {
        this.subscribe();
        this.setState({title: this.props.title});
    }

    subscribe = () => {
        UserSettingsStore.subscribe(() => {
            const UserSettings = UserSettingsStore.getState();

            if (UserSettings.countryName && UserSettings.countryData && UserSettings.globalData) this.filterGraphData();
        })
    }

    filterGraphData = () => {
        const UserSettings = UserSettingsStore.getState();
        const CountryName = UserSettings.countryName;
        const CountryData = UserSettings.globalData[CountryName]
        const FilterType = this.dataType[this.props.title];

        let filteredList = [];

        // create X and Y Label Sets for Graphs 
        if (Array.isArray(UserSettings.globalData[CountryName])) {
            CountryData.forEach(record => {
                filteredList.push({count: record[FilterType], date: record.date});
            });

            const currentRecord = filteredList[filteredList.length - 1];
            const comparisonRecord = filteredList[filteredList.length - 2];

            const currentCount = currentRecord.count;
            const comparisionCount = comparisonRecord.count;

            const increaseCount = currentCount - comparisionCount;

            this.setState({currentCount: currentCount});
            this.setState({increaseCount: increaseCount});

            this.setState({lineGraph: <LineGraph data={filteredList} className={"info-card__graph"}/>})
        }

        return null
    }

    render() {
        const {title, data} = this.props;

        return(
            <div className="dashboard--content__info-card">
                <div className="info-card__title">
                    {this.state.title}
                </div>

                <span className="info-card__statistic">
                    {/* {this.state.currentCount.toLocaleString('en')} */}
                    <CountUp
                        start={0}
                        end={this.state.currentCount}
                        duration={2}
                        useEasing={true}
                    ></CountUp>
                </span>
                <span className="info-card__count">
                    +{this.state.increaseCount} {/* this.infoDescription[this.state.title] */}
                </span>
                {this.state.lineGraph}
            </div>
        )
    }
}

export default InfoCard;