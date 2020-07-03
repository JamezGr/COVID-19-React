const countries = {
    "All Countries": {
        "AD": "Andorra", // DONE
        "AE": "United Arab Emirates", // DONE
        "AF": "Afghanistan", // DONE
        "AG": "Antigua and Barbuda", // DONE
        "AI": "Anguilla", // DONE
        "AL": "Albania", // DONE
        "AM": "Armenia", // DONE
        "AN": "Netherlands Antilles",
        "AO": "Angola", // DONE
        "AQ": "Antarctica",
        "AR": "Argentina", // DONE
        "AS": "American Samoa", // DONE
        "AT": "Austria", // DONE
        "AU": "Australia", // DONE
        "AW": "Aruba",
        "AX": "Åland Islands", // DONE
        "AZ": "Azerbaijan", // DONE
        "BA": "Bosnia and Herzegovina", // DONE
        "BB": "Barbados", // DONE
        "BD": "Bangladesh", // DONE
        "BE": "Belgium", // DONE
        "BF": "Burkina Faso", // DONE
        "BG": "Bulgaria", // DONE
        "BH": "Bahrain", // DONE
        "BI": "Burundi",
        "BJ": "Benin", // DONE
        "BL": "Saint Barthélemy", // DONE
        "BM": "Bermuda", // DONE
        "BN": "Brunei Darussalam", // DONE
        "BO": "Bolivia, Plurinational State of",
        "BQ": "Caribbean Netherlands", // DONE
        "BR": "Brazil", // DONE
        "BS": "Bahamas", // DONE
        "BT": "Bhutan", // DONE
        "BV": "Bouvet Island",
        "BW": "Botswana", // DONE
        "BY": "Belarus",
        "BZ": "Belize", // DONE
        "CA": "Canada", // DONE
        "CC": "Cocos (Keeling) Islands",
        "CD": "Congo, the Democratic Republic of the", // DONE
        "CF": "Central African Republic", // DONE
        "CG": "Congo",
        "CH": "Switzerland", // DONE
        "CI": "Côte d'Ivoire", // DONE
        "CK": "Cook Islands", // DONE
        "CL": "Chile", // DONE
        "CM": "Cameroon", // DONE
        "CN": "China", // DONE
        "CO": "Colombia", // DONE
        "CR": "Costa Rica", // DONE
        "CU": "Cuba", // DONE
        "CV": "Cape Verde", // DONE
        "CW": "Cura\u00e7ao",
        "CX": "Christmas Island",
        "CY": "Cyprus", // DONE
        "CZ": "Czech Republic", // DONE
        "DE": "Germany", // DONE
        "DJ": "Djibouti",
        "DK": "Denmark", // DONE
        "DM": "Dominica", // DONE
        "DO": "Dominican Republic",
        "DZ": "Algeria", // DONE
        "EC": "Ecuador",
        "EE": "Estonia", // DONE
        "EG": "Egypt",
        "EH": "Western Sahara", // DONE
        "ER": "Eritrea", // DONE
        "ES": "Spain", // DONE
        "ET": "Ethiopia", // DONE
        "EU": "Europe",
        "FI": "Finland", // DONE
        "FJ": "Fiji", // DONE
        "FK": "Falkland Islands (Malvinas)", // DONE
        "FM": "Micronesia, Federated States of", // DONE
        "FO": "Faroe Islands", // DONE
        "FR": "France", // DONE
        "GA": "Gabon", // DONE
        "GB-ENG": "England",
        "GB-NIR": "Northern Ireland",
        "GB-SCT": "Scotland",
        "GB-WLS": "Wales",
        "GB": "United Kingdom", // DONE
        "GD": "Grenada",
        "GE": "Georgia", // DONE
        "GF": "French Guiana", // DONE
        "GG": "Guernsey", // DONE
        "GH": "Ghana", // DONE
        "GI": "Gibraltar",
        "GL": "Greenland", // DONE
        "GM": "Gambia",
        "GN": "Guinea", // DONE
        "GP": "Guadeloupe", // DONE
        "GQ": "Equatorial Guinea", // DONE
        "GR": "Greece", // DONE
        "GS": "South Georgia and the South Sandwich Islands",
        "GT": "Guatemala", // DONE
        "GU": "Guam", // DONE
        "GW": "Guinea-Bissau",
        "GY": "Guyana", // DONE
        "HK": "Hong Kong",
        "HM": "Heard Island and McDonald Islands",
        "HN": "Honduras", // DONE
        "HR": "Croatia", // DONE
        "HT": "Haiti", // DONE
        "HU": "Hungary", // DONE
        "ID": "Indonesia", // DONE
        "IE": "Ireland", // DONE
        "IL": "Israel", // DONE
        "IM": "Isle of Man", // DONE
        "IN": "India",
        "IO": "British Indian Ocean Territory",
        "IQ": "Iraq", // DONE
        "IR": "Iran, Islamic Republic of", // DONE
        "IS": "Iceland", // DONE
        "IT": "Italy", // DONE
        "JE": "Jersey", // DONE
        "JM": "Jamaica",
        "JO": "Jordan", // DONE
        "JP": "Japan", // DONE
        "KE": "Kenya", // DONE
        "KG": "Kyrgyzstan", // DONE
        "KH": "Cambodia", // DONE
        "KI": "Kiribati", // DONE
        "KM": "Comoros", // DONE
        "KN": "Saint Kitts and Nevis",
        "KP": "Korea, Democratic People's Republic of", // DONE
        "KR": "Korea, Republic of", // DONE
        "KW": "Kuwait", // DONE
        "KY": "Cayman Islands",
        "KZ": "Kazakhstan",
        "LA": "Lao People's Democratic Republic", // DONE
        "LB": "Lebanon", // DONE
        "LC": "Saint Lucia", // DONE
        "LI": "Liechtenstein", // DONE
        "LK": "Sri Lanka", // DONE
        "LR": "Liberia", // DONE
        "LS": "Lesotho", // DONE
        "LT": "Lithuania", // DONE
        "LU": "Luxembourg", // DONE
        "LV": "Latvia", // DONE
        "LY": "Libya", // DONE
        "MA": "Morocco", // DONE
        "MC": "Monaco", // DONE
        "MD": "Moldova, Republic of", // DONE
        "ME": "Montenegro",
        "MF": "Saint Martin", // DONE
        "MG": "Madagascar", // DONE
        "MH": "Marshall Islands", // DONE
        "MK": "Macedonia, the former Yugoslav Republic of", // DONE
        "ML": "Mali", // DONE
        "MM": "Myanmar", // DONE
        "MN": "Mongolia", // DONE
        "MO": "Macao",
        "MP": "Northern Mariana Islands", // DONE
        "MQ": "Martinique", // DONE
        "MR": "Mauritania", // DONE
        "MS": "Montserrat", // DONE
        "MT": "Malta", // DONE
        "MU": "Mauritius", // DONE
        "MV": "Maldives", // DONE
        "MW": "Malawi", // DONE
        "MX": "Mexico", // DONE
        "MY": "Malaysia", // DONE
        "MZ": "Mozambique", // DONE
        "NA": "Namibia", // DONE
        "NC": "New Caledonia", // DONE
        "NE": "Niger", // DONE
        "NF": "Norfolk Island", // DONE
        "NG": "Nigeria", // DONE
        "NI": "Nicaragua", // DONE
        "NL": "Netherlands", // DONE
        "NO": "Norway", // DONE
        "NP": "Nepal", // DONE
        "NR": "Nauru", // DONE
        "NU": "Niue", // DONE
        "NZ": "New Zealand", // DONE
        "OM": "Oman", // DONE
        "PA": "Panama", // DONE
        "PE": "Peru", // DONE
        "PF": "French Polynesia", // DONE
        "PG": "Papua New Guinea", // DONE
        "PH": "Philippines", // DONE
        "PK": "Pakistan", // DONE
        "PL": "Poland", // DONE
        "PM": "Saint Pierre and Miquelon", // DONE
        "PN": "Pitcairn", // DONE
        "PR": "Puerto Rico",
        "PS": "Palestine", // DONE
        "PT": "Portugal", // DONE
        "PW": "Palau", // DONE
        "PY": "Paraguay", // DONE
        "QA": "Qatar", // DONE
        "RE": "Réunion", // DONE
        "RO": "Romania", // DONE
        "RS": "Serbia",
        "RU": "Russian Federation", // DONE
        "RW": "Rwanda", // DONE
        "SA": "Saudi Arabia", // DONE
        "SB": "Solomon Islands", // DONE
        "SC": "Seychelles", // DONE
        "SD": "Sudan", // DONE
        "SE": "Sweden", // DONE
        "SG": "Singapore", // DONE
        "SH": "Saint Helena, Ascension and Tristan da Cunha", // 
        "SI": "Slovenia", // DONE
        "SJ": "Svalbard and Jan Mayen Islands",
        "SK": "Slovakia",
        "SL": "Sierra Leone", // DONE
        "SM": "San Marino", // DONE
        "SN": "Senegal", // DONE
        "SO": "Somalia", // DONE
        "SR": "Suriname", // DONE
        "SS": "South Sudan", // DONE
        "ST": "Sao Tome and Principe", // DONE
        "SV": "El Salvador", // DONE
        "SX": "Sint Maarten (Dutch part)", // DONE
        "SY": "Syrian Arab Republic", // DONE
        "SZ": "Swaziland", // DONE
        "TC": "Turks and Caicos Islands",
        "TD": "Chad", // DONE
        "TF": "French Southern Territories",
        "TG": "Togo", // DONE
        "TH": "Thailand", // DONE
        "TJ": "Tajikistan", // DONE
        "TK": "Tokelau", // DONE
        "TL": "Timor-Leste", // DONE
        "TM": "Turkmenistan", // DONE
        "TN": "Tunisia", // DONE
        "TO": "Tonga", // DONE
        "TR": "Turkey", // DONE
        "TT": "Trinidad and Tobago", // DONE
        "TV": "Tuvalu", // DONE
        "TW": "Taiwan", // DONE
        "TZ": "Tanzania, United Republic of", // DONE
        "UA": "Ukraine", // DONE
        "UG": "Uganda", // DONE
        "UM": "US Minor Outlying Islands",
        "US": "United States", // DONE
        "UY": "Uruguay", // DONE
        "UZ": "Uzbekistan", // DONE
        "VA": "Holy See (Vatican City State)", // DONE
        "VC": "Saint Vincent and the Grenadines",
        "VE": "Venezuela, Bolivarian Republic of", // DONE
        "VG": "Virgin Islands, British", // DONE
        "VI": "Virgin Islands, U.S.", // DONE
        "VN": "Viet Nam", // DONE
        "VU": "Vanuatu", // DONE
        "WF": "Wallis and Futuna Islands", // DONE
        "XK": "Kosovo",
        "WS": "Samoa", // DONE
        "YE": "Yemen", // DONE
        "YT": "Mayotte", // DONE
        "ZA": "South Africa", // DONE
        "ZM": "Zambia", // DONE
        "ZW": "Zimbabwe" // DONE
    }
}
