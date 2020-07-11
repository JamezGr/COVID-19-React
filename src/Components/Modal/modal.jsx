import React from 'react';
import ReactDOM from 'react-dom';

import CountriesContent from './Countries/countries_modal';
import Country from './Countries/country_holder';
import CountriesList from '../../Content/countries.json';

import LocalStorageHelper from '../../Helpers/LocalStorageHelper';


import ModalList from './modal_list';
import { ModalType, setModalActive, setModalInactive } from '../../Actions';

import { ModalStore } from '../../Stores';

class Modal extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            isVisible: true,
            contentType: null
        }

        this.contentTypeList = {
            NONE: null,
            COUNTRY_LIST: <CountriesContent/>
        }
    }

    componentDidMount() {
        this.checkState();
        this.setDefaults();
    }

    componentDidUpdate() {}

    checkState() {
        ModalStore.subscribe(() => {
            const MODAL_STATE = ModalStore.getState();
            MODAL_STATE.contentType === ModalType.NONE ? this.setInactive(): this.setActive(MODAL_STATE.contentType);
        });
    }

    setDefaults = () => {
        LocalStorageHelper.hasItem("userCountry") ? 
        ModalStore.dispatch(setModalInactive()): ModalStore.dispatch(setModalActive(ModalType.COUNTRY_LIST));
    }

    setActive = (contentType) => {
        this.setState({isVisible: true});
        this.setState({contentType: this.contentTypeList[contentType]});
    };

    setInactive = () => this.setState({isVisible: false});

    render() {
        const {contentType, visiblity} = this.props;

        return (
            this.state.isVisible ? this.state.contentType: null
        )
    }
}

export default Modal

export const ModalTypes = {
    SELECT_COUNTRY: 'select-country',
    SELECT_LANGUAGE: 'select-language',
    INFO: 'info-about'
}