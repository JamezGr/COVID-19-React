import React from 'react';

class InfoCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
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

                <div className="info-card__statistic">
                    0
                </div>
            </div>
        )
    }
}

export default InfoCard;