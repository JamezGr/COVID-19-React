import React from 'react';
import { createStore } from 'redux';

import { modal } from '../Reducers/modal';
import { userSettings } from '../Reducers/userSettings';

export const ModalStore = createStore(modal); 
export const UserSettingsStore = createStore(userSettings);
