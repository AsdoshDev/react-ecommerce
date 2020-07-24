import data from './../../constants/sections.json';

const INITIAL_STATE = {
    collections: data.shopItems
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default shopReducer;