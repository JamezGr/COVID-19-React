import React from 'react';

class Overview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="dashboard--content__tabs-area">
                <div className="dashboard--content__tab">Confirmed Cases</div>
                <div className="dashboard--content__tab">Confirmed Deaths</div>
                <div className="dashboard--content__tab">Confirmed Recoveries</div>
            </div>
        )
    }
}

export default Overview; 