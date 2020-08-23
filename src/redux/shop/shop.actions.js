import ShopActionTypes from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

// action is nothing but returning an object
// thunk helps to return a function that gets dispatched instead.

const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
})

const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    errorMessage: errorMessage
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        console.log("fetchCollectionsStartAsync -> dispatch")
        dispatch(fetchCollectionsStart());
        const collectionRef = firestore.collection('collections');
        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            console.log("fetchCollectionsStartAsync -> collectionsMap", collectionsMap)
            dispatch(fetchCollectionsSuccess(collectionsMap));
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
    }
}