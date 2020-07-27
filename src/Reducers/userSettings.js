import { UserSettings } from '../Actions';
import LocalStorageHelper from '../Helpers/LocalStorageHelper';

const defaultSettings = {
    countryName: "United Kingdom",
    countryCode: "GB",
    language: "English",
    countryData: {}
}

const getUserCountry = () => {
    if (LocalStorageHelper.hasItem("userCountry")) {
        const UserCountry = JSON.parse(LocalStorageHelper.getItem("userCountry"));

        return {
            countryName: UserCountry.name,
            countryCode: UserCountry.flagCode,
            language: "English",
            countryData: {}
        }
    }

    return defaultSettings
};

const initialUserSettings = getUserCountry();

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

        case (UserSettings.SET_GLOBAL_DATA): {
            return {
                ...state,
                globalData: action.response
            }
        }

        case (UserSettings.SET_COUNTRY_VISIBILTY): {
            return {
                ...state,
                countryToggled: action.name 
            }
        }

        default: 
            return initialUserSettings
    }
}