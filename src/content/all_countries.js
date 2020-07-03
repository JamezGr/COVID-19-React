const countries = {
    "All Countries": {
        "AD": "Andorra", // DONE
        "AE": "United Arab Emirates", // DONE
        "AF": "Afghanistan", // DONE
        "AG": "Antigua and Barbuda", // DONE
        "AI": "Anguilla", // DONE
        "AL": "Albania", // DONE
        "AM": "Armenia", // DONE
        "AN": "Netherlands Antilles", // DONE
        "AO": "Angola", // DONE
        "AQ": "Antarctica",
        "AR": "Argentina", // DONE
        "AS": "American Samoa", // DONE
        "AT": "Austria", // DONE
        "AU": "Australia", // DONE
        "AW": "Aruba", // DONE
        "AX": "Åland Islands", // DONE
        "AZ": "Azerbaijan", // DONE
        "BA": "Bosnia and Herzegovina", // DONE
        "BB": "Barbados", // DONE
        "BD": "Bangladesh", // DONE
        "BE": "Belgium", // DONE
        "BF": "Burkina Faso", // DONE
        "BG": "Bulgaria", // DONE
        "BH": "Bahrain", // DONE
        "BI": "Burundi", // DONE
        "BJ": "Benin", // DONE
        "BL": "Saint Barthélemy", // DONE
        "BM": "Bermuda", // DONE
        "BN": "Brunei Darussalam", // DONE
        "BO": "Bolivia, Plurinational State of", // DONE
        "BQ": "Caribbean Netherlands", // DONE
        "BR": "Brazil", // DONE
        "BS": "Bahamas", // DONE
        "BT": "Bhutan", // DONE
        "BV": "Bouvet Island",
        "BW": "Botswana", // DONE
        "BY": "Belarus", // DONE
        "BZ": "Belize", // DONE
        "CA": "Canada", // DONE
        "CC": "Cocos (Keeling) Islands", // DONE
        "CD": "Congo, the Democratic Republic of the", // DONE
        "CF": "Central African Republic", // DONE
        "CG": "Congo", // DONE
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
        "CW": "Curaçao", // DONE
        "CX": "Christmas Island", // DONE
        "CY": "Cyprus", // DONE
        "CZ": "Czech Republic", // DONE
        "DE": "Germany", // DONE
        "DJ": "Djibouti", // DONE
        "DK": "Denmark", // DONE
        "DM": "Dominica", // DONE
        "DO": "Dominican Republic", // DONE
        "DZ": "Algeria", // DONE
        "EC": "Ecuador", // DONE
        "EE": "Estonia", // DONE
        "EG": "Egypt", // DONE
        "EH": "Western Sahara", // DONE
        "ER": "Eritrea", // DONE
        "ES": "Spain", // DONE
        "ET": "Ethiopia", // DONE
        "EU": "Europe", // DONE
        "FI": "Finland", // DONE
        "FJ": "Fiji", // DONE
        "FK": "Falkland Islands (Malvinas)", // DONE
        "FM": "Micronesia, Federated States of", // DONE
        "FO": "Faroe Islands", // DONE
        "FR": "France", // DONE
        "GA": "Gabon", // DONE
        "GB-ENG": "England", // DONE
        "GB-NIR": "Northern Ireland", // DONE
        "GB-SCT": "Scotland", // DONE
        "GB-WLS": "Wales", // DONE
        "GB": "United Kingdom", // DONE
        "GD": "Grenada", // DONE
        "GE": "Georgia", // DONE
        "GF": "French Guiana", // DONE
        "GG": "Guernsey", // DONE
        "GH": "Ghana", // DONE
        "GI": "Gibraltar", // DONE
        "GL": "Greenland", // DONE
        "GM": "Gambia", // DONE
        "GN": "Guinea", // DONE
        "GP": "Guadeloupe", // DONE
        "GQ": "Equatorial Guinea", // DONE
        "GR": "Greece", // DONE
        "GS": "South Georgia and the South Sandwich Islands", // DONE
        "GT": "Guatemala", // DONE
        "GU": "Guam", // DONE
        "GW": "Guinea-Bissau", // DONE
        "GY": "Guyana", // DONE
        "HK": "Hong Kong", // DONE
        "HM": "Heard Island and McDonald Islands", // DONE
        "HN": "Honduras", // DONE
        "HR": "Croatia", // DONE
        "HT": "Haiti", // DONE
        "HU": "Hungary", // DONE
        "ID": "Indonesia", // DONE
        "IE": "Ireland", // DONE
        "IL": "Israel", // DONE
        "IM": "Isle of Man", // DONE
        "IN": "India", // DONE
        "IO": "British Indian Ocean Territory", // DONE
        "IQ": "Iraq", // DONE
        "IR": "Iran, Islamic Republic of", // DONE
        "IS": "Iceland", // DONE
        "IT": "Italy", // DONE
        "JE": "Jersey", // DONE
        "JM": "Jamaica", // DONE
        "JO": "Jordan", // DONE
        "JP": "Japan", // DONE
        "KE": "Kenya", // DONE
        "KG": "Kyrgyzstan", // DONE
        "KH": "Cambodia", // DONE
        "KI": "Kiribati", // DONE
        "KM": "Comoros", // DONE
        "KN": "Saint Kitts and Nevis", // DONE
        "KP": "Korea, Democratic People's Republic of", // DONE
        "KR": "Korea, Republic of", // DONE
        "KW": "Kuwait", // DONE
        "KY": "Cayman Islands", // DONE
        "KZ": "Kazakhstan", // DONE
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
        "ME": "Montenegro", // DONE
        "MF": "Saint Martin", // DONE
        "MG": "Madagascar", // DONE
        "MH": "Marshall Islands", // DONE
        "MK": "Macedonia, the former Yugoslav Republic of", // DONE
        "ML": "Mali", // DONE
        "MM": "Myanmar", // DONE
        "MN": "Mongolia", // DONE
        "MO": "Macao", // DONE
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
        "PR": "Puerto Rico", // DONE
        "PS": "Palestine", // DONE
        "PT": "Portugal", // DONE
        "PW": "Palau", // DONE
        "PY": "Paraguay", // DONE
        "QA": "Qatar", // DONE
        "RE": "Réunion", // DONE
        "RO": "Romania", // DONE
        "RS": "Serbia", // DONE
        "RU": "Russian Federation", // DONE
        "RW": "Rwanda", // DONE
        "SA": "Saudi Arabia", // DONE
        "SB": "Solomon Islands", // DONE
        "SC": "Seychelles", // DONE
        "SD": "Sudan", // DONE
        "SE": "Sweden", // DONE
        "SG": "Singapore", // DONE
        "SH": "Saint Helena, Ascension and Tristan da Cunha", // DONE
        "SI": "Slovenia", // DONE
        "SJ": "Svalbard and Jan Mayen Islands", // DONE
        "SK": "Slovakia", // DONE
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
        "TC": "Turks and Caicos Islands",  // DONE
        "TD": "Chad", // DONE
        "TF": "French Southern Territories", // DONE
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
        "UM": "US Minor Outlying Islands", // DONE
        "US": "United States", // DONE
        "UY": "Uruguay", // DONE
        "UZ": "Uzbekistan", // DONE
        "VA": "Holy See (Vatican City State)", // DONE
        "VC": "Saint Vincent and the Grenadines", // DONE
        "VE": "Venezuela, Bolivarian Republic of", // DONE
        "VG": "Virgin Islands, British", // DONE
        "VI": "Virgin Islands, U.S.", // DONE
        "VN": "Viet Nam", // DONE
        "VU": "Vanuatu", // DONE
        "WF": "Wallis and Futuna Islands", // DONE
        "XK": "Kosovo", // DONE
        "WS": "Samoa", // DONE
        "YE": "Yemen", // DONE
        "YT": "Mayotte", // DONE
        "ZA": "South Africa", // DONE
        "ZM": "Zambia", // DONE
        "ZW": "Zimbabwe" // DONE
    }
}
