export const setWord = (word) => {
    return {
        type: 'SET_WORD',
        payload: word 
    };
};

export const setDefault = () => {
    return {
        type: 'SET_HOME'
    };
};

export const unsetDefault = () => {
    return {
        type: 'SET_SEARCH'
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