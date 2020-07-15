import React from 'react';
import LineGraph from '../Charts/chart';
import { UserSettingsStore } from '../../Stores';
import { userSettings } from '../../Reducers/userSettings';

class InfoCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            lineGraph: []
        }

        this.infoDescription = {
            "TOTAL CONFIRMED CASES": "New Cases",
            "TOTAL CONFIRMED DEATHS": "New Deaths",
            "TOTAL CONFIRMED RECOVERIES": "New Recoveries"
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

            if (UserSettings.countryName && UserSettings.countryData) this.filterGraphData();
        })
    }

    filterGraphData = () => {
        const UserSettings = UserSettingsStore.getState();
        const filterType = this.dataType[this.props.title];

        let filteredList = [];

        if (Array.isArray(UserSettings.countryData)) {
            UserSettings.countryData.forEach(record => {
                filteredList.push({count: record[filterType], date: record.date});
            });

            this.setState({lineGraph: <LineGraph data={filteredList}/>})
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

                <span className="info-card__statistic">0</span>
                <span className="info-card__count">+0 {this.infoDescription[this.state.title]}</span>
                {this.state.lineGraph}
            </div>
        )
    }
}

export default InfoCard;