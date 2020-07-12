import React from 'react';
import axios from 'axios';

const API = {};

API.fetchData = (country) => {
    axios.get(`https://pomber.github.io/covid19/timeseries.json`)
      .then(response => {
          if (response.data[country]) console.log(country, response.data[country]);
          else console.error("No Available Data Found for", country)
        }
    )
};

API.cacheData = () => {}

export default API;