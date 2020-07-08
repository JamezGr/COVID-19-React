import { ModalSettings, ModalState, ModalType } from '../Actions';

const initialState = {
    state: ModalState.INACTIVE,
    contentType: ModalType.NONE
}

export const modal = (state = initialState, action) => {
    switch (action.type) {
        case ModalSettings.SET_ACTIVE: {
            return {
                ... state,
                state: ModalState.ACTIVE,
                contentType: action.contentType
            }
        }

        case ModalSettings.SET_INACTIVE: {
            return {
                ... state,
                state: ModalState.INACTIVE,
                contentType: ModalType.NONE
            }
        }

        default: {
            return state
        }
    }
}