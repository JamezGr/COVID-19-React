import React from 'react';

class Container extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: ""
        };
    }

    componentDidMount() {
        this.setState({isLoading: this.props.loadState});
    }

    render() {
        const {loadState} = this.props;

        return (
            <div className={"dashboard--content__container " + this.props.loadState} style={{width: "1160px", height: "400px"}}>

            </div>
        )
    }
}

export default Container;