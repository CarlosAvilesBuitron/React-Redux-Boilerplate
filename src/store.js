import { createStore } from 'redux';

import reducer from "./reducers/mainReducer.js"; 

export default createStore(reducer);