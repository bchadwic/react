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

export const unsetDefault = () => {
    return {
        type: 'DEFAULT_WORD'
    };
};

export const setAdd = () => {
    return {
        type: 'OPEN_ADD_MODAL'
    };
};

export const unsetAdd = () => {
    return {
        type: 'CLOSE_ADD_MODAL'
    };
};