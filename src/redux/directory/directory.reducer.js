import data from './../../constants/sections.json';

const INITIAL_STATE = data;
const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default directoryReducer;