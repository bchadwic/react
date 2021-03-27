const defaultReducer = (state = true, action) => {
    switch(action.type){
        case 'SET_HOME':
            return true;
        case 'SET_SEARCH':
            return false; 
        default:
            return state;
    }
};

export default defaultReducer;