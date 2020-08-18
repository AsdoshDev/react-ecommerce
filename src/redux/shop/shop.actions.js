import ShopActionTypes from './shop.types';

const updateCollections = collection => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collection
})


export default updateCollections;