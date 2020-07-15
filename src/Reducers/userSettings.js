import { UserSettings } from '../Actions';

const initialUserSettings = {
    countryName: "United Kingdom",
    countryCode: "GB",
    language: "English",
    countryData: {}
}

export const userSettings = (state = initialUserSettings, action) => {
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

        case (UserSettings.SET_COUNTRY_DATA): {
            return {
                ...state, 
                countryData: action.response
            }
        }
    }
}