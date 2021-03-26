import wordReducer from './wordReducer';
import defaultReducer from './defaultReducer';
import {combineReducers} from 'redux';
import addingReducer from './addingReducer';

const rootReducer = combineReducers({
    currentWord: wordReducer,
    isDefault: defaultReducer,
    isAdding: addingReducer 
});

export default rootReducer;