import React from 'react';
import ReactDOM from 'react-dom';
import Country from './Countries/country_holder';
import CountriesList from '../../content/countries.json';

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class ModalList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: true,

            listTitle: "",
            listType: "",
            listContent: [],
            listData: []
        }

        this.toggleList = this.toggleList.bind(this);
    }

    componentDidMount() {
        if (typeof CountriesList[this.props.title] !== "undefined") {
            this.setState({listContent: CountriesList[this.props.title]});
        } 
    }

    toggleList() {
        this.state.isOpen ? this.setState({isOpen: false}) : this.setState({isOpen: true});
    }
    
    render() {
        const {title, data, type} = this.props;
        
        return (
            <div className="modal--list">
                <div className="separator"></div>
                <div className="modal--list__accessor">
                    <span className="modal--list__title">{title}</span>
                    <span className="modal--list__toggle" title="Toggle List" onClick={this.toggleList}>{this.state.isOpen ? <ExpandLessIcon/> : <ExpandMoreIcon/>}</span>
                </div>
                <div className={this.state.isOpen ? "modal--list__container visible": "modal--list__container hidden"}>
                    {this.state.listContent.map((item, i) => <Country name={item.name} 
                                                                    language={item.language}
                                                                    type={item.code}/>)}
                </div>
            </div>
        )
    }
}

export default ModalList;