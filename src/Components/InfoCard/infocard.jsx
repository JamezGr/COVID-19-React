import React from 'react';

class InfoCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        }

        this.infoDescription = {
            "TOTAL CONFIRMED CASES": "New Cases",
            "TOTAL CONFIRMED DEATHS": "New Deaths",
            "TOTAL CONFIRMED RECOVERIES": "New Recoveries"
        }
    }

    componentDidMount() {
        this.setState({title: this.props.title});
    }

    render() {
        const {title} = this.props;

        return(
            <div className="dashboard--content__info-card">
                <div className="info-card__title">
                    {this.state.title}
                </div>

                <span className="info-card__statistic">0</span>
                <span className="info-card__count">+0 {this.infoDescription[this.state.title]}</span>
            </div>
        )
    }
}

export default InfoCard;