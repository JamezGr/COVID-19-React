export const ModalType = {
    COUNTRY_LIST: "COUNTRY_LIST",
    LANGUAGE_LIST: "LANGUAGE_LIST",
    ABOUT_INFO: "ABOUT_INFO",
    NONE: "NONE"
}

export const ModalState = {
    ACTIVE: "MODAL_ACTIVE",
    INACTIVE: "MODAL_INACTIVE"
}

export const ModalSettings = {
    SET_ACTIVE: "SET_MODAL_ACTIVE",
    SET_INACTIVE: "SET_MODAL_INACTIVE",
    SET_TYPE: "SET_MODAL_TYPE"
};

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_FILTERED: "SHOW_FILTERED"
}

export const UserSettings = {
    SET_COUNTRY: "SET_COUNTRY",
    SET_LANGUAGE: "SET_LANGUAGE",
    SET_COUNTRY_DATA: "SET_COUNTRY_DATA",
    SET_GLOBAL_DATA: "SET_GLOBAL_DATA",
    SET_COUNTRY_VISIBILTY: "SET_COUNTRY_VISIBILITY"
}

export const API = {
    SEND_REQUEST: "SET_REQUEST",
    CACHE_RESPONSE: "CACHE_RESPONSE",
}

export const setModalActive = (contentType = ModalType.NONE) => {
    return {
        type: ModalSettings.SET_ACTIVE,
        contentType: contentType
    }
}

export const setModalInactive = () => {
    return {
        type: ModalSettings.SET_INACTIVE,
        contentType: ModalType.NONE
    }
}

export const setUserCountry = (name, code) => {
    return {
        type: UserSettings.SET_COUNTRY,
        name: name,
        code: code
    }
}

export const setUserLanguage = (language) => {
    return {
        type: UserSettings.SET_LANGUAGE,
        language: language
    }
}

export const setCountryData = (response) => {
    return {
        type: UserSettings.SET_COUNTRY_DATA,
        response: response
    }
}

export const setGlobalData = (response) => {
    return {
        type: UserSettings.SET_GLOBAL_DATA,
        response: response
    }
}

export const toggleCountryVisibility = (name) => {
    return {
        type: UserSettings.SET_COUNTRY_VISIBILTY,
        name: name
    }
}