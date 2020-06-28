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
            listData: []
        }
    }

    componentDidMount() {
        if (typeof CountriesList[this.props.title] !== "undefined") {
            this.setState({listContent: CountriesList[this.props.title]});
        } 
    }
    
    render() {
        const {title, data, type} = this.props;
        
        return (
            <div className="modal--list">
                <div className="separator"></div>
                <div className="modal--list__title">{title}</div>
                <div className="modal--list__container">
                    {this.state.listContent.map((item, i) => <Country name={item.name} 
                                                                        language={item.language}
                                                                        type={item.code}/>)}
                </div>
            </div>
        )
    }
}

export default ModalList;