import wordReducer from './wordReducer';
import defaultReducer from './defaultReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    currentWord: wordReducer,
    isDefault: defaultReducer
});

export default rootReducer;