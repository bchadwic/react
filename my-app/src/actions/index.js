export const setWord = (word) => {
    return {
        type: 'SET_WORD',
        payload: word 
    };
};

export const setDefault = () => {
    return {
        type: 'NOT_DEFAULT_WORD'
    };
};

export const setAdd = () => {
    return {
        type: 'ADD_A_WORD'
    };
};