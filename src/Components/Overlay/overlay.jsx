import React from 'react';

import { ModalType, setModalActive, setModalInactive } from '../../Actions';
import { ModalStore } from '../../Stores';

class Overlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: true
        }
    }

    componentDidMount() {
        this.checkState();
    }

    checkState() {
        ModalStore.subscribe(() => {
            const MODAL_STATE = ModalStore.getState();
            MODAL_STATE.contentType == ModalType.NONE ? this.setInactive(): this.setActive();
        });
    }

    setActive = () => this.setState({isVisible: true});
    setInactive = () => this.setState({isVisible: false});

    render() {
        return (
            this.state.isVisible ? <div id="overlay"></div>: null
        )
    }
        
}

export default Overlay;