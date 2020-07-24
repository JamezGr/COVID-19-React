import React from 'react';

class Container extends React.Component {
    constructor(props) {
        super(props);

        this.container = React.createRef();

        this.state = {
            isLoading: ""
        };

        this.widthSettings = {
            1: 340,
            2: 735,
            3: 1130
        }

        this.heightSettings = {
            1: 200,
            2: 400,
            3: 600
        }
    }

    componentDidMount() {
        this.setState({isLoading: this.props.loadState});
        this.setSize(this.props.width, this.props.height);
    }

    setSize(width, height) {
        width < 1 || width > 3 ?
        this.container.current.style.width = parseInt(this.widthSettings[1])+ "px":
        this.container.current.style.width = parseInt(this.widthSettings[width]) + "px"

        height < 1 || height > 3 ?
        this.container.current.style.height = parseInt(this.heightSettings[1])+ "px":
        this.container.current.style.height = parseInt(this.heightSettings[height]) + "px"
    }

    render() {
        const {loadState, height, width, contents} = this.props;

        return (
            <div className={"dashboard--content__container"} ref={this.container}>
                <div style={{height: "100%"}}>
                    {this.props.contents}
                </div>
                
            </div>
        )
    }
}

export default Container;