import React from 'react';
import ReactDOM from 'react-dom';
import Country from './Countries/country_holder';
import CountriesList from '../../content/countries.json';

class ModalList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listTitle: "",
            listType: "",
            listContent: [],
            listData: {}
        }
    }

    componentDidMount() {
        console.log(this.props.data);
    }
    
    render() {
        const {title, data} = this.props;

        return (
            <div className="modal--list">
                <div className="separator"></div>
                <div className="modal--list__title">{title}</div>
                <div className="modal--list__container">
                    <Country name="United Kingdom" language="English"/>
                </div>
            </div>
        )
    }
}

export default ModalList;