
import { combineReducers } from 'redux';
import toggleReducer from './toggleReducer';


const rootReducer = combineReducers({
    toggleReducer: toggleReducer
});

export default rootReducer;