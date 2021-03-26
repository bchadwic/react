const addingReducer = (state = false, action) => {
    switch(action.type){
        case 'OPEN_ADD_MODAL':
            return true;
        case 'CLOSE_ADD_MODAL':
            return false;
        default:
            return state;
    }
};

export default addingReducer;