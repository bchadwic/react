const wordReducer = (state = "Word Bubble", action) => {
    switch(action.type){
        case 'SET_WORD':
            return action.payload;
        default:
            return state;
    }
};

export default wordReducer;