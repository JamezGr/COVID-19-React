import { UserSettings } from '../Actions';

const initialState = {
    countryName: "United Kingdom",
    countryCode: "GB",
    language: "English"
}

export const userSettings = (state = initialState, action) => {
    switch (action.type) {
        case (UserSettings.SET_COUNTRY): {
            return {
                ...state,
                countryName: action.name,
                countryCode: action.code
            }
        }

        case (UserSettings.SET_LANGUAGE): {
            return {
                ...state,
                language: action.language
            }
        }
    }
}