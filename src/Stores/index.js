import React from 'react';
import { createStore } from 'redux';

import { modal } from '../Reducers/modal';

export const ModalStore = createStore(modal); 
