const defaultReducer = (state = true, action) => {
    switch(action.type){
        case 'NOT_DEFAULT_WORD':
            return false;
        default:
            return state;
    }
};

export default defaultReducer;