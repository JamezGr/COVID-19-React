import React from 'react';
import axios from 'axios';

import { UserSettingsStore } from '../Stores';
import { setCountryData, setGlobalData } from '../Actions';


const API = {};

API.fetchData = (country) => {
    axios.get(`https://pomber.github.io/covid19/timeseries.json`)
      .then(response => {
          if (response.data[country]) UserSettingsStore.dispatch(setCountryData(response.data[country]));
          else console.error("No Available Data Found for", country)
        }
    )
};

API.fetchGlobalData = () => {
  axios.get(`https://pomber.github.io/covid19/timeseries.json`)
  .then(response => UserSettingsStore.dispatch(setGlobalData(response.data)));
}

export default API;