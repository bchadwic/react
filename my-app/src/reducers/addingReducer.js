const addingReducer = (state = false, action) => {
    switch(action.type){
        case 'ADD_A_WORD':
            return true;
        default:
            return state;
    }
};

export default addingReducer;